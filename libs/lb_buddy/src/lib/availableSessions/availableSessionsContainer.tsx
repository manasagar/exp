import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AvailableSessionsCard from './availablesessioncard';
import { useGetUserSessionsMutation } from '@/libs/lb_features/src/lib/buddy/buddyServices';
import { router } from 'expo-router';

const AvailableSessionsContainer = () => {
  const [userId, setUserId] = useState(null);
  const [getUserSessions, { data: userSessionsResp, error }] = useGetUserSessionsMutation();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);

          // Call the mutation with the userId
          const payload = { userId: storedUserId };
          getUserSessions(payload);
        }
      } catch (e) {
        console.error('Error fetching userId from AsyncStorage:', e);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userSessionsResp) {
      console.log('User sessions response:', userSessionsResp);

      // Iterate over each session to log start time, end time, current time, and the start/end dates
      userSessionsResp.sessions.forEach((session) => {
        // Log the entire session object to inspect its structure
        console.log('Session Object:', session);

        // Extract start and end time from dateTimeSlots (string format)
        const dateTimeSlots = session.dateTimeSlots?.[0] || '';
        console.log(`Raw Start and End Time: ${dateTimeSlots}`);

        // Assuming `dateTimeSlots` contains a comma-separated start and end time
        const [startTime, endTime] = dateTimeSlots.split(',').map(time => time.trim());

        console.log(`Raw Start Time: ${startTime}`);
        console.log(`Raw End Time: ${endTime}`);

        const currentTime = new Date();

        // Manually extract the date (everything before the T in the ISO format)
        const startDate = startTime.split('T')[0]; // Extract the date part before the T
        const endDate = endTime.split('T')[0]; // Extract the date part before the T
        const currentDate = currentTime.toLocaleDateString();

        console.log(`Session Start Date: ${startDate}`);
        console.log(`Session End Date: ${endDate}`);
        console.log(`Current Date: ${currentDate}`);

        // Check and log the extracted times (time part)
        const startTimeParts = startTime ? startTime.split('T')[1]?.split('Z')[0] : 'Invalid Start Time';
        const endTimeParts = endTime ? endTime.split('T')[1]?.split('Z')[0] : 'Invalid End Time';

        console.log(`Session Start Time: ${startTimeParts}`);
        console.log(`Session End Time: ${endTimeParts}`);
        console.log(`Current Time: ${currentTime.toLocaleTimeString()}`); // Logs only the current time
        if(startTimeParts < currentTime.toLocaleTimeString()){
          console.log('Session has started');
        }else{
          console.log('Session has not started yet');
        }
      });
    }

    if (error) {
      console.error('Error fetching user sessions:', error);
    }
  }, [userSessionsResp, error]);

  const handleBookSession = () => {
    router.push('/buddy/findBuddy');
  };

  const renderSessionData = () => {
    const sessions = userSessionsResp?.sessions || [];
    if (sessions.length === 0) {
      return (
        <View style={tw`flex-1 items-center justify-center p-4`}>
          <Text style={tw`text-lg text-gray-700 mb-4 text-white`}>No sessions available.</Text>
          <TouchableOpacity
            style={tw`bg-blue-500 p-3 rounded-lg`}
            onPress={handleBookSession} // Use handler function
          >
            <Text style={tw`text-white text-center font-bold`}>Book a Session</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={tw`flex-1 p-4`}>
        <ScrollView>
          {sessions.map((session) => (
            <AvailableSessionsCard key={session.sessionId} session={session} isCompleted={false} />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 py-6 px-1 `}>
      <Text style={tw`text-xl text-center font-bold text-white mb-4`}>
        Upcoming Confirmed Sessions
      </Text>
      {renderSessionData()}
    </View>
  );
};

export default AvailableSessionsContainer;
