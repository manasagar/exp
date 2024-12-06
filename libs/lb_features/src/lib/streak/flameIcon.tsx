// FlameIcon.tsx
import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const FlameIcon = ({ streak }: { streak: number }) => {
  // Display the flame icon based on streak
  return (
    <View style={styles.container}>
      <Text style={styles.flameIcon}>🔥</Text>
      <Text style={styles.streakText}>{`Streak Level: ${streak}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  flameIcon: {
    fontSize: 40,
  },
  streakText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlameIcon;
