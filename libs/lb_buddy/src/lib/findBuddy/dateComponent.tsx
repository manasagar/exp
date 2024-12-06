import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import dayjs from 'dayjs';
import DateSelector from './dateSelector';
import SessionsList from './sessionList';

// Add type definition for allowed time values
type TimeSlot = 'day' | 'night' | 'all';

// Add prop type validation
interface DateComponentProps {
  selectedTime: TimeSlot;
  onSelectSession: (session: any) => void;
}

// Validate selectedTime before logging
const DateComponent: React.FC<DateComponentProps> = ({ selectedTime, onSelectSession }) => {
  const [activeDate, setActiveDate] = useState(dayjs());

  // Validate selectedTime value
  const isValidTimeSlot = (time: string): time is TimeSlot => {
    return ['day', 'night', 'all'].includes(time);
  };

  // Use the validated value in logs
  useEffect(() => {
    if (isValidTimeSlot(selectedTime)) {
      console.log('Selected time slot:', selectedTime);
    } else {
      console.warn(`Invalid time slot value: ${selectedTime}`);
    }
  }, [selectedTime]);

  useEffect(() => {
    console.log('Active date:', activeDate.format('YYYY-MM-DD'));
  }, [activeDate]);

  const handleSelectSession = (session) => {
    // Handle the selected session with additional details
    console.log('Selected session details:', session);
    if (onSelectSession) {
      onSelectSession(session); // Pass the session details to parent
    }
  };

  return (
    <ScrollView style={tw`p-4 rounded-lg`}>
      <View style={tw`flex justify-between`}>
        <DateSelector activeDate={activeDate} setActiveDate={setActiveDate} />
        <SessionsList activeDate={activeDate} onSelectSession={handleSelectSession} selectedTime={selectedTime} />
      </View>
    </ScrollView>
  );
};

export default DateComponent;