import React from 'react';
import { View, TextInput } from 'react-native';
import { useFormContext } from 'react-hook-form';

interface TextboxProps {
  name?: string;
  style?: any;
  twClass?: string;
  placeholder?: string;
}

export const TextBox: React.FC<TextboxProps> = ({ name, style, twClass, placeholder }) => {
  const { register, setValue } = useFormContext();

  return (
    <TextInput
      placeholder={name}
      onChangeText={(text) => setValue(name, text)}
      style={[{ borderWidth: 1, borderColor: '#000', padding: 8 }, style]}
    />
  );
};
