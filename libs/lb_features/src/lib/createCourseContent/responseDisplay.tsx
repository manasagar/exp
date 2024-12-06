import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';
import {Btn} from '@dr/lb_presentation';

const ResponseDisplay = ({ responseArr }) => {
  const [customPrompt, setCustomPrompt] = useState(''); 

  const handleCustomPromptSubmit = () => {
    // TODO: Add logic to execute custom prompt, update responses, etc.
  };

  return (
    <View> 
      {responseArr.map((response, i) => (
        <View key={i} style={tw`p-5 bg-blue-400 my-5`}>
          <Text style={tw`text-xl font-bold mb-5 inline-block`}>
            Response {++i}
          </Text>
          <Text style={tw`inline-block`}>Re-execute</Text>
          <Text>{response}</Text>
        </View>
      ))}
    {/*   <View style={tw`my-5`}>
        <TextInput 
          placeholder="Add a custom prompt" 
          value={customPrompt}
          onChangeText={setCustomPrompt} />
        <Btn
          onPress={handleCustomPromptSubmit}
          style={tw`mt-5 bg-blue-400 w-32`}
         >
          <Text style={tw`text-white font-primary font-bold`}>
            Add a custom prompt
          </Text>
        </Btn>
      </View> */}
    </View> 
  );
};

export default ResponseDisplay;
