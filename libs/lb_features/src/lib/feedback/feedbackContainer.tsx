// Import necessary React hooks and libraries for managing state and side effects
import React, { useState, useEffect, useCallback, useMemo } from 'react';
// Import axios for making API requests
import axios from 'axios';
// Import dayjs for handling dates
import dayjs from 'dayjs';
// Import React Native components for UI
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
// Import FontAwesome icons
import { FontAwesome } from '@expo/vector-icons';
// Import Tailwind CSS library for styling
import tw from 'twrnc';

// Define the initial state for dates and sessions
const initialDatesSessions = {
  dates: [],
  sessions: [],
};

// Define the FindBuddyContainer component
const FindBuddyContainer = () => {
  // State variables
  const [dates, setDates] = useState(initialDatesSessions.dates);
  const [sessions, setSessions] = useState(initialDatesSessions.sessions);
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());
  const [showFeedback, setShowFeedback] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  // Fetch dates and sessions from the API
  const fetchDatesAndSessions = useCallback(async () => {
    try {
      const response = await axios.get('/api/dates-sessions');
      setDates(response.data.dates || []);
      setSessions(response.data.sessions || []);
      setError('');
    } catch (error) {
      console.error('Error fetching dates and sessions:', error);
      setError('Failed to load dates and sessions. Please try again.');
    }
  }, []);

  // Fetch dates and sessions on component mount and set up a timer for current time
  useEffect(() => {
    fetchDatesAndSessions();
    const timer = setInterval(() => setCurrentDateTime(dayjs()), 60000);
    return () => clearInterval(timer);
  }, [fetchDatesAndSessions]);

  // Get the next available session
  const getNextAvailableSession = useCallback(() => {
    const upcomingSessions = sessions.filter(session =>
      dayjs(session.time).isAfter(currentDateTime)
    );
    return upcomingSessions.length > 0 ? upcomingSessions[0] : null;
  }, [sessions, currentDateTime]);

  // Handle feedback submission
  const handleSubmit = async () => {
    if (!feedback) {
      setError('Feedback cannot be empty.'); // Validate feedback input
      return;
    }
    try {
      await axios.post('/api/feedback', { feedback });
      setShowFeedback(false);
      setFeedback('');
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again.');
    }
  };

  // Render feedback form
  const renderFeedbackForm = useMemo(() => (
    <View style={tw`w-full max-w-2xl p-6 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-md mx-auto`}>
      <View style={tw`flex-row items-center justify-center mb-4`}>
        <FontAwesome name="comment-o" size={32} color="#E5E7EB" />
        <Text style={tw`text-lg font-semibold text-gray-100 ml-2`}>
          We value your feedback!
        </Text>
      </View>
      <TextInput
        value={feedback}
        onChangeText={setFeedback}
        style={tw`w-full h-40 p-4 border border-gray-600 rounded-md mb-4 bg-black bg-opacity-100 text-base text-gray-100`}
        multiline
        numberOfLines={10}
        placeholder="Type your feedback here..."
        placeholderTextColor="#6B7280"
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={tw`bg-gray-600 bg-opacity-80 p-4 rounded-lg mb-2`}
      >
        <Text style={tw`text-white text-center font-semibold`}>Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowFeedback(false)}
        style={tw`bg-gray-700 bg-opacity-80 p-4 rounded-lg`}
      >
        <Text style={tw`text-white text-center font-semibold`}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ), [feedback]);

  // Return the JSX for the component
  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      {error ? (
        <Text style={tw`text-red-500`}>{error}</Text>
      ) : null}
      <Modal
        visible={showFeedback}
        transparent={true}
        animationType="fade"
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-90`}>
          {renderFeedbackForm}
        </View>
      </Modal>
    </View>
  );
};

// Export the component
export default FindBuddyContainer;