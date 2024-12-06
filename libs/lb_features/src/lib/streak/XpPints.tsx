// XPPoints.tsx
import React from 'react';
import { View, Text } from 'react-native';

const XPPoints = ({ streak }: { streak: number }) => {
  // Calculate XP points based on streak
  const xpPoints = streak * 10; // Adjust the calculation as needed

  return (
    <View>
      <Text>{`XP Points: ${xpPoints}`}</Text>
      {/* Add your XP points UI components */}
    </View>
  );
};

export default XPPoints;
