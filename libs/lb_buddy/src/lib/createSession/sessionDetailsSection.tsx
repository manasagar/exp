import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import DatePickerComponent from '../findBuddy/datePicker';
import TimeRangeComponent from '../findBuddy/timeRangeComponent';

const SessionDetailsSection = ({ index, onRemove, handleTimeRangesChange, onInputChange, formData, onDateChange }) => {
  return (
    <View style={tw`bg-white dark:bg-gray-800 p-6 mb-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700`}>
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-800 dark:text-gray-100`}>
          Session {index + 1}
        </Text>
        {index > 0 && (
          <TouchableOpacity 
            onPress={() => onRemove(index)} 
            style={tw`bg-red-50 dark:bg-red-900/30 p-2.5 rounded-full active:bg-red-100`}
          >
            <Ionicons name="close-circle" size={26} color="#EF4444" />
          </TouchableOpacity>
        )}
      </View>

      <View style={tw`space-y-6`}>
        <View>
          <TextInput
            style={tw`bg-gray-50 dark:bg-gray-700 px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 font-medium`}
            placeholder="Enter Skill*,  Eg:Python"
            placeholderTextColor={tw.color('gray-400')}
            value={formData[index]?.topic || ''}
            onChangeText={(text) => onInputChange(index, 'topic', text)}
          />
        </View>

        <View>        
          <TextInput
            style={tw`bg-gray-50 dark:bg-gray-700 px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 font-medium`}
            placeholder="Enter Topic*, Eg: Installing Python"
            placeholderTextColor={tw.color('gray-400')}
            value={formData[index]?.subtopic || ''}
            onChangeText={(text) => onInputChange(index, 'subtopic', text)}
          />
        </View>

        <View>
          <DatePickerComponent 
            onDateChange={(date) => onDateChange(date)}
          />
        </View>

        <View>
          <TimeRangeComponent
            onTimeRangesChange={(ranges) => handleTimeRangesChange(ranges)}
          />
        </View>
      </View>
    </View>
  );
};

export default SessionDetailsSection;
