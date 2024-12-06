import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { usePostLeaveSessionMutation } from '@/libs/lb_features/src/lib/buddy/buddyServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFullImgPath } from '@/libs/lb_utils/src';

export default function AvailableSessionsCard({ session,isCompleted }) {
  const router = useRouter();
  const [leaveSession, { data: leaveSessionResp }] = usePostLeaveSessionMutation();

  // Destructure session data
  const { meetingUrl, dateTimeSlots, catId, subSkillId, duration, participantsIds, participantsReqd, imgPath } = session;
  console.log(session)
  const numParticipants = participantsIds.length;
  const requiredParticipants = participantsReqd[0];
  const statusText = numParticipants >= requiredParticipants ? 'CONFIRMED' : 'WAITLIST';

  const handleJoinPress = async () => {
    console.log(session.sessionId);
    await AsyncStorage.setItem('sessionId', session.sessionId);
    router.push(`/buddy/currentSession?id=${session.sessionId}`);
  };

  const handleLeavePress = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        const payload = {
          userId: userId,
          sessionId: session.sessionId,
        };
        await leaveSession(payload);
        router.push('/buddy/availableSessions');
      } else {
        // Handle the case when userId is not found in AsyncStorage
        console.error('User ID not found');
      }
    } catch (error) {
      // Handle any errors that occur
      console.error('Error leaving session:', error);
    }
  };

  // Function to handle and format date and time
  const formatDateTime = (dateTime) => {
    const [date, time] = dateTime.split('T');
    const [year, month, day] = date.split('-'); // Extract year, month, and day

    const formattedDate = `${day}-${month}-${year}`; // Convert to day-month-year format

    const [hours, minutes] = time.slice(0, 5).split(':'); // Extract hours and minutes

    // Convert time to 12-hour format
    const hourInt = parseInt(hours, 10);
    const isPM = hourInt >= 12;
    const adjustedHours = hourInt % 12 || 12; // Convert 0 to 12
    const formattedTime = `${adjustedHours}:${minutes} ${isPM ? 'PM' : 'AM'}`;

    // Get current date and tomorrow's date
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

    // Format the date
    let displayDate;
    if (date === today) {
      displayDate = `Today • ${formattedTime}`;
    } else if (date === tomorrow) {
      displayDate = `Tomorrow • ${formattedTime}`;
    } else {
      // Create a Date object for the given date and get the day name
      const dateObj = new Date(date);
      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
      displayDate = `${formattedDate} • ${dayName} • ${formattedTime}`;
    }
    return displayDate;
  };

  console.log(dateTimeSlots);

  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-white text-base mb-3`}>
        {/* Format this as needed */}
        {formatDateTime(dateTimeSlots[0])}
      </Text>

      <View style={tw`bg-white border border-[#B8C7EC] rounded-lg shadow-lg w-full`}>
        <View style={tw`flex-row items-center p-4`}>
          <Image
            source={imgPath}
            style={tw`w-12 h-12 rounded-full mr-4`}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`text-black text-xl font-bold`}>{subSkillId}</Text>
            <Text style={tw`text-black text-base my-1`}>
              {duration} Min • {statusText}
            </Text>
            <Text style={tw`text-gray-500 text-sm`}>{catId}</Text>
          </View>
        </View>

        {!isCompleted && (
          <View style={tw`flex-row border-t border-gray-300`}>
            <TouchableOpacity style={tw`border-r border-gray-300 bg-transparent py-3 rounded-bl-lg flex-1`} onPress={handleJoinPress}>
              <Text style={tw`text-gray-600 font-bold text-base text-center`}>JOIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`bg-transparent py-3 rounded-br-lg flex-1`} onPress={handleLeavePress}>
              <Text style={tw`text-gray-600 font-bold text-base text-center`}>LEAVE</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}