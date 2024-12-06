// StreakFreezes.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface StreakFreezesProps {
  availableFreezes: number;
}

const StreakFreezes: React.FC<StreakFreezesProps> = ({ availableFreezes }) => {
  // Display the streak freezes UI
  return (
    <View>
      <Text>{`Available Freezes: ${availableFreezes}`}</Text>
      {/* Add your streak freezes UI components */}
    </View>
  );
};

export default StreakFreezes;
