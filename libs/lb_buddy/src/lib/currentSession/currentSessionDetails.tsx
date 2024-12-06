import React, { useEffect, useState } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import io from 'socket.io-client';
import {
  useGetSessionQuery,
  useGetSessionFeedbackMutation,
} from '@/libs/lb_features/src/lib/buddy/buddyServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SOCKET_SERVER_URL = 'http://localhost:6200'; // TODO

const CurrentSessionDetails = ({ hasJoinedMeeting, setHasJoinedMeeting }) => {
  const [sessionId, setSessionId] = useState('');
  const [userId, setUserId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isFeedbackUpdated, setIsFeedbackUpdated] = useState(false); // State to trigger feedback updates

  // Fetch sessionId from AsyncStorage
  useEffect(() => {
    const fetchSessionId = async () => {
      const storedSessionId = await AsyncStorage.getItem('sessionId');
      setSessionId(storedSessionId);
    };

    fetchSessionId();
  }, []);

  // Fetch userId from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        setUserId(storedUserId || '');
      } catch (error) {
        console.error('Failed to fetch userId from AsyncStorage:', error);
        setUserId('');
      }
    };

    fetchUserId();
  }, []);

  // Fetch session data
  const {
    data: sessionData,
    error: sessionError,
    isLoading: sessionLoading,
  } = useGetSessionQuery(
    { URL_PARAMS: [sessionId] },
    { skip: !sessionId } // Skip query if sessionId is not available
  );

  // Initialize the mutation hook for fetching feedback via POST request
  const [getFeedback, { data: feedbackData, error: feedbackError }] =
    useGetSessionFeedbackMutation();

  // Handle feedback data once fetched
  useEffect(() => {
    if (feedbackData) {
      // console.log(feedbackData);
      setFeedback(feedbackData); // Set feedback state with API response
    }
    if (feedbackError) {
      console.error('Error fetching session feedback:', feedbackError);
    }
  }, [feedbackData, feedbackError]);

  // Fetch feedback when the component is mounted
  useEffect(() => {
    if (sessionId) {
      getFeedback({ sessionId }); // Fetch feedback using mutation
    }
  }, [sessionId, getFeedback]);

  // Handle WebSocket connection
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');

      // Join the session room based on the session ID
      if (sessionId) {
        socket.emit('joinRoom', { sessionId });
        console.log(`Requested to join room for session: ${sessionId}`);
      }
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });

    socket.on('peerEvaluationFeedback', (data) => {
      if (data.sessionId === sessionId) {
        // Ensure feedback is for the current session
        console.log('Feedback received via WebSocket:', data);
        setIsFeedbackUpdated(true); // Trigger feedback refetching
      }
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  // Refetch feedback data when feedback is updated via WebSocket
  useEffect(() => {
    if (isFeedbackUpdated && sessionId) {
      getFeedback({ sessionId }); // Manually refetch feedback using mutation
      setIsFeedbackUpdated(false); // Reset the state
    }
  }, [isFeedbackUpdated, sessionId, getFeedback]);

  const handleOpenMeeting = () => {
    if (sessionData?.session?.meetingUrl) {
      setHasJoinedMeeting(true);
      Linking.openURL(sessionData.session.meetingUrl);
    } else {
      console.error('Meeting URL not available');
    }
  };

  const formatKey = (key) => {
    // Replace underscores with spaces and capitalize each word
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const participantCount = sessionData?.session?.participantsIds?.length || 0;

  return (
    <View style={tw`bg-gray-200 p-4 rounded-lg`}>
      <View style={tw`mt-2`}>
        <Text>
          <b>Skills:</b> {sessionData?.session?.subSkillId}
        </Text>
        <Text>
          <b>Level:</b> Intermediate
        </Text>
        <Text>
          <b>Participants:</b> {participantCount}
        </Text>
        <Text style={tw`text-sm`}>
          <b>Duration:</b> {sessionData?.session?.duration}m
        </Text>
        <br />
        <Text>
          <b>Topic:</b> {sessionData?.session?.topic?.topic}
        </Text>
        <Text>
          <b>Role:</b>{' '}
          {userId
            ? sessionData?.session?.participantsRoles.find(
                (obj) => obj.participantId === userId
              )?.role
            : 'NO ROLE'}
        </Text>
      </View>
      <View style={tw`flex-row mt-2`}>
        <View style={tw`bg-gray-300 py-1 px-2 rounded-full mr-2`}>
          <Text style={tw`text-sm`}>1-9</Text>
        </View>
      </View>

      {feedback && feedback.length > 0 ? (
        <View style={tw`mt-5`}>
          <Text style={tw`font-bold`}>Peer Evaluation Feedback:</Text>
          {feedback
            .filter((item) => item.userId !== userId) // Filter out feedback from the current user
            .map((item, index) => (
              <View key={item._id} style={tw`mt-3 bg-gray-100 p-3 rounded-lg`}>
                <Text style={tw`font-bold`}>Feedback {index + 1}</Text>
                <Text>
                  <b>User ID:</b> {item.userId}
                </Text>
                <Text>
                  <b>Session ID:</b> {item.sessionId}
                </Text>

                {/* Iterate over the feedback object */}
                <View style={tw`mt-2`}>
                  <Text style={tw`font-bold`}>Fundamentals:</Text>
                  {Object.entries(item.feedback).map(([key, value]) => (
                    <Text key={key}>
                      <b>{formatKey(key)}:</b> {String(value)}{' '}
                      {/* Ensure boolean and other values are converted to string */}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
        </View>
      ) : (
        <Text>No feedback available</Text>
      )}

      {sessionData?.session?.meetingUrl && (
        <TouchableOpacity
          style={tw`bg-blue-500 mt-5 py-1 px-5 rounded-lg items-center`}
          onPress={handleOpenMeeting}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            Join Meeting
          </Text>
          <Text style={tw`text-white text-sm text-center`}>
            (Return here afterwards to share your feedback)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CurrentSessionDetails;
