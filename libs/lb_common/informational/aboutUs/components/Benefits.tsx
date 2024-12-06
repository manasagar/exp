import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';

const Benefits = () => {
  const data = [
    {
      aspect: 'Confidence, Soft Skills',
      withDhrona: 'Peer-Peer guided practice',
    },
    {
      aspect: 'Motivated Learning',
      withDhrona: 'Goals, Rewards, Curious content',
    },
    {
      aspect: 'Conceptual Understanding',
      withDhrona: 'Learning using Feynman technique',
    },
    {
      aspect: 'Knowledge Retention',
      withDhrona: 'Quizzes, Peer-Peer teaching',
    },
    { aspect: 'Opportunity Awareness', withDhrona: 'Guidance' },
    {
      aspect: 'Career Prospects',
      withDhrona: 'Portfolio building, Career guidance',
    },
    {
      aspect: 'Relevant Study Focus',
      withDhrona: 'Guidance on latest trends & requirements',
    },
    {
      aspect: 'Leveraging Network',
      withDhrona: 'Networking with Alumni, Peers, Relevant industry experts',
    },
  ];

  return (
    <ScrollView style={tw`p-4 bg-white`}>
       <Text style={tw`text-xl font-bold dark:text-white`}>Benefits to the students</Text>
      <View style={tw`bg-gray-100 rounded-lg shadow`}>
        <View style={tw`flex-row border-b border-gray-300`}>
          <Text style={tw`flex-1 p-3 font-bold text-purple-600`}>Aspect</Text>
          <Text style={tw`flex-1 p-3 font-bold text-purple-600 text-center`}>
            With Dhrona Campus
          </Text>
        </View>

        {data.map((row, index) => (
          <View
            key={index}
            style={tw`flex-row ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <Text style={tw`flex-1 p-3`}>{row.aspect}</Text>
            <Text style={tw`flex-1 p-3 text-center text-purple-600`}>
              {row.withDhrona}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Benefits;
