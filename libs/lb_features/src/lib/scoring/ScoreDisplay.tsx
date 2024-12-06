// ScoreDisplay.tsx
import React from 'react';
import { View, Text } from 'react-native';
import twc from 'tailwind-react-native-classnames';

const ScoreDisplay: React.FC<{ score: number }> = ({ score }) => {
  return (
    <View style={twc`py-4`}>
      <Text style={twc`text-lg`}>User Score: {score}</Text>
    </View>
  );
};

export default ScoreDisplay;


