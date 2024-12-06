import React from 'react';
import { isMobile } from '../../../../lb_utils/src/index';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import tw from 'twrnc';

interface InputProps extends TextInputProps {
  type?: "curved" | "underline";
}

interface LabeledInputProps extends TextInputProps {
  label: string;
  textStyle?: any;
}

export const Input: React.FC<InputProps> = ({ type = "curved", ...props }) => {
  let style = `border-[1px] text-primary p-1.5 rounded-md px-3`;
  if (type === "underline") {
    style = `border-b-[1px] text-primary p-1.5 px-3 ${isMobile() ? "text-lg mb-3" : "text-xs"}`;
  }
  return (
    <TextInput placeholder="sometext" {...props} style={[tw`${style}`, props.style]} />
  );
};

export const LabeledInput: React.FC<LabeledInputProps> = ({ label, textStyle, style, ...props }) => {
  return (
    <View style={tw`border-2 bg-gray-100 p-1 pl-3 rounded-md`}>
      <Text style={[tw`text-xs font-medium`, textStyle]}>{label}</Text>
      <TextInput style={[tw`border-[1px] m-0 mt-1 w-full rounded-md`, style]} {...props} />
    </View>
  );
};
