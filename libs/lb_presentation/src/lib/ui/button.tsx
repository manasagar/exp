import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import tw from 'twrnc';

interface CurvedButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

export const Btn: React.FC<CurvedButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`rounded-lg bg-blue-500 p-2`}>
      <Text style={tw`text-white font-bold`}>{children}</Text>
    </TouchableOpacity>
  );
};
