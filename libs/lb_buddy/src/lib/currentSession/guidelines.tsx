import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component
import { HtmlRenderer } from '@/libs/lb_utils/src';
import { spokenGuidelines } from './guidelines/spoken';

const Guidelines = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false); // State to manage accordion

  const renderItem = ({ item }) => (
    <View style={tw`p-4 mb-4 bg-white rounded-lg shadow-md`}>
      <Text style={tw`text-lg font-bold mb-2`}>{item.title}</Text>
      {item.desc.map((descItem, index) => (
        <Text key={index} style={tw`mb-1`}>• {descItem}</Text>
      ))}
    </View>
  );

  return (
    <View style={tw`flex-1 p-4`}>
      <TouchableOpacity
        style={tw`flex-row items-center`}  // Wrap both icon and text in a TouchableOpacity
        onPress={() => setAccordionOpen(!isAccordionOpen)}
      >
        <View style={tw`w-8 h-8 rounded-full bg-blue-500 justify-center items-center mr-4`}>
          <Icon
            name={isAccordionOpen ? 'remove' : 'add'}
            size={20}
            color="#fff"
          />
        </View>
        <Text style={tw`text-lg font-bold text-white`}>Guidelines</Text>
      </TouchableOpacity>
      {isAccordionOpen && (
        <FlatList
          data={spokenGuidelines}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <View style={tw`mb-4`}>
              <Text style={tw`text-xl font-bold my-4 text-white`}>
                {item.label}
              </Text>
              <FlatList
                data={item.items}
                keyExtractor={(item) => item.title}
                renderItem={renderItem}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Guidelines;
