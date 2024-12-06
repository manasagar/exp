import { TextBox } from '@/libs/lb_presentation/src';
import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';

const HostTopic = ({ roles }) => {
  const { control } = useForm();

  return (
    <View style={tw`mt-4`}>
      <Controller
        control={control}
        name="hostTopic"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextBox
            placeholder="Any specific topic"   
         
          />
        )}
      />
      <Controller
        control={control}
        name="sessionDescription"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextBox
            placeholder="Session description"
          
          />
        )}
      />
    </View>
  );
};

export default HostTopic;
