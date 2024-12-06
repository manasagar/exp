import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'twrnc';
import dayjs from 'dayjs';

const DateSelector = ({ activeDate, setActiveDate }) => {
  const dates = Array.from({ length:4 }).map((_, i) => dayjs().add(i, 'day'));

  return (
    <View style={tw`flex-wrap flex-row justify-center mb-4`}>
      {dates.map((date, index) => {
        const isToday = date.isSame(activeDate, 'day');
        return (
          <TouchableOpacity
            key={index}
            style={tw`flex items-center mx-1 mb-2`}
            onPress={() => {
              setActiveDate(date);
              console.log('Selected date:', date.format('YYYY-MM-DD'));
            }}
          >
            <View style={tw`${isToday ? 'bg-gray-200 p-2 rounded-md' : 'p-1'} flex items-center`}>
              <Text style={tw`${isToday ? 'text-black' : 'text-white'} text-xl px-3`}>
                {date.format('DD')}
              </Text>
              <Text style={tw`${isToday ? 'text-black' : 'text-white'} text-lg`}>
                {date.format('ddd').toUpperCase()}
              </Text>
            </View>
            {isToday && (
              <View style={tw``}>
                <View
                  style={tw`w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200`}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DateSelector;
