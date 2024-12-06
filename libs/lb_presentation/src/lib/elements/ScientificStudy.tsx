import React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';

const ScientificStudy = ({ children, style }) => {
  return (
    <Text style={[tw`italic`, style]}>
      {children}
    </Text>
  );
};

export default ScientificStudy;
