import { commonConstants } from '@/libs/lb_common/commonConstants';
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const { companyName } = commonConstants.compInfo;
export const Header = () => (
  <View>
    <View style={tw`p-4`}>
      <Text style={tw`text-2xl font-bold dark:text-white`}>Who Are We?</Text>
      <Text style={tw`mt-2 text-gray-700 dark:text-gray-300`}>
        Dhrona Campus is a product from {companyName}, its an ecosystem for
        empowering engineering students.
      </Text>
      <Text style={tw`mt-1 text-gray-700 dark:text-gray-300`}>
        We're tackling career awareness, learning engagement, and industry skill
        gaps for students.
      </Text>
      <Text style={tw`mt-1 text-gray-700 dark:text-gray-300`}>
        The line of business for Dhrona Campus is edutainment-focused skill
        development. It operates as a digital learning platform aimed at engineering
        students, blending education and engagement
      </Text>
      <Text style={tw`mt-1 text-gray-700 dark:text-gray-300`}>
        The platform's focus is on creating an enjoyable, retainable learning
        experience with a subscription-based revenue model, targeting
        individuals seeking skills for career growth
      </Text>
    </View>
  </View>
);
