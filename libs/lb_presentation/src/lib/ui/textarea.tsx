import React from 'react';
import { View, TextInput } from 'react-native';
import { useFormContext } from 'react-hook-form';

interface TextareaProps {
  name: string;
  style?: any;
  twClass?: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextareaProps> = ({ name, style,placeholder, twClass }) => {
  const { register, setValue } = useFormContext();

  return (
    <TextInput
      onChangeText={(text) => setValue(name, text)}
      placeholder={placeholder}
      multiline
      style={[{ borderWidth: 1, borderColor: '#000', padding: 8 }, style]}
    />
  );
};
