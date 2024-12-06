// VIPStatus.tsx
import React from 'react';
import { View, Text } from 'react-native';

const VIPStatus = ({ streak }: { streak: number }) => {
  // Determine VIP status based on streak
  const vipStatus = streak >= 30 ? 'VIP' : 'Standard';

  return (
    <View>
      <Text>{`VIP Status: ${vipStatus}`}</Text>
      {/* Add your VIP status UI components */}
    </View>
  );
};

export default VIPStatus;
