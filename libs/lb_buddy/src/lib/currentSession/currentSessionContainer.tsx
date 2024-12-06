import React, { useEffect, useState } from "react";
import CurrentSessionDetails from './currentSessionDetails';
import Guidelines from './guidelines';
import { Linking, Text } from 'react-native';
import tw from 'twrnc';
import EvaluationForm from './evaluation/evaluationForm';
import EvaluationDisplay from './evaluation/evaluationDisplay';
import { Btn } from '@/libs/lb_presentation/src';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetSessionQuery } from '@/libs/lb_features/src/lib/buddy/buddyServices';

export default function CurrentSessionContainer() {
  const [sessionId, setSessionId] = useState('');
  const [isJoinButtonEnabled, setIsJoinButtonEnabled] = useState(false);
  const [hasJoinedMeeting, setHasJoinedMeeting] = useState(false); // Flag for joining meeting

  useEffect(() => {
    const fetchSessionId = async () => {
      const storedSessionId = await AsyncStorage.getItem('sessionId');
      setSessionId(storedSessionId);
    };
    
    fetchSessionId();
  }, []);

  const { data: sessionData, error: sessionError, isLoading: sessionLoading } = useGetSessionQuery(
    { URL_PARAMS: [sessionId] },
    { skip: !sessionId }
  );

  useEffect(() => {
    if (sessionData?.session?.dateTimeSlots) {
      const [startTime, endTime] = sessionData.session.dateTimeSlots[0].split(',');
      
      const start = new Date(startTime);
      const end = new Date(endTime);
      const now = new Date();

      const tenMinutesBeforeStart = new Date(start.getTime() - 10 * 60 * 1000); // 10 minutes before start time

      if (now >= tenMinutesBeforeStart && now <= end) {
        setIsJoinButtonEnabled(true);
      } else {
        setIsJoinButtonEnabled(false);
      }
    }
  }, [sessionData]);

  const handleOpenMeeting = () => {
    if (sessionData?.session?.meetingUrl) {
      Linking.openURL(sessionData.session.meetingUrl);
      setHasJoinedMeeting(true); // Set flag to true when the meeting is joined
    } else {
      console.error('Meeting URL not available');
    }
  };

  useEffect(() => {
    const logTimeEveryMinute = () => {
      const intervalId = setInterval(() => {
        const currentTime = new Date().toISOString().split('.')[0] + 'Z';
        console.log('Current Time:', currentTime);
      }, 60000); // 60000 ms = 1 minute

      return () => clearInterval(intervalId); // Clear interval on component unmount
    };

    logTimeEveryMinute();
  }, []);

  // console.log("In the parent component: ", sessionData);

  return (
    <>
      <CurrentSessionDetails hasJoinedMeeting={hasJoinedMeeting} setHasJoinedMeeting={setHasJoinedMeeting} /> {/* Pass the flag */}
      <Guidelines />
      <EvaluationForm hasJoinedMeeting={hasJoinedMeeting} /> {/* Pass the flag */}
      <EvaluationDisplay />
      {isJoinButtonEnabled && (
        <Btn onPress={handleOpenMeeting} style={tw`mt-5 bg-blue-400 w-1/3`}>
          <Text style={tw`text-white font-primary font-bold`}>Join meeting</Text>
        </Btn>
      )}
    </>
  );
}
