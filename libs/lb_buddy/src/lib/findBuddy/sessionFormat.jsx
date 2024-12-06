import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import Roles from './roles';
import HostTopic from './hostTopic';
import { techFormats } from './techFormats';
import { useForm, FormProvider } from 'react-hook-form';
import { RadioButton } from '@/libs/lb_presentation/src';

const SessionFormat = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const methods = useForm(); // Initialize useForm

  return (
    <FormProvider {...methods}>
      <View style={tw`p-4`}>
        {Object.keys(techFormats).map((key) => (
          <TouchableOpacity
            key={key}
            style={tw`mb-4 p-2 border rounded flex flex-row items-center ${
              selectedFormat === key ? 'border-blue-500' : 'border-gray-300'
            }`}
            onPress={() => setSelectedFormat(key)}
          >
            <RadioButton
              selected={selectedFormat === key}
              onPress={() => setSelectedFormat(key)}
            />
            <View style={tw`ml-2 flex-1`}>
              <Text style={tw`text-lg font-bold`} numberOfLines={1}>
                {techFormats[key].formatLbl}
              </Text>
              <Text style={tw`text-gray-600`} numberOfLines={2} ellipsizeMode='tail'>
                {techFormats[key].formatDesc}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {selectedFormat && techFormats[selectedFormat].roles && (
          <>
            <Roles roles={techFormats[selectedFormat].roles} />
            <HostTopic />
          </>
        )}
      </View>
    </FormProvider>
  );
};

export default SessionFormat;
