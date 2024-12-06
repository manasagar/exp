import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

const CardWrapper = ({ children }) => {
  return (
    <View
    style={tw`justify-center text-2xl p-0 ml-0 mr-0 max-w-lg text-white max-w-md w-auto `}>
    {children}
  </View>
  );
};

export default CardWrapper;