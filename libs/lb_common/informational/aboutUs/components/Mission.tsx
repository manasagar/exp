import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export const Mission = () => (
  <View style={tw`p-4`}>
    <Text style={tw`text-xl font-bold dark:text-white`}>Our Mission</Text>
    <View style={tw`mt-2`}>
      <Text style={tw`font-bold text-gray-700 dark:text-gray-300`}>Empowerment</Text>
      <Text style={tw`text-gray-700 dark:text-gray-300`}>
        Enabling students to achieve higher levels of personal and academic success.
      </Text>
    </View>
    <View style={tw`mt-2`}>
      <Text style={tw`font-bold text-gray-700 dark:text-gray-300`}>Entrepreneurship</Text>
      <Text style={tw`text-gray-700 dark:text-gray-300`}>
        Fostering a spirit of entrepreneurship among students to drive innovation and economic growth.
      </Text>
    </View>
    <View style={tw`mt-2`}>
      <Text style={tw`font-bold text-gray-700 dark:text-gray-300`}>Quality Graduates</Text>
      <Text style={tw`text-gray-700 dark:text-gray-300`}>
        Producing graduates who are not only knowledgeable but also responsible citizens capable of contributing positively to society.
      </Text>
    </View>
  </View>
);
