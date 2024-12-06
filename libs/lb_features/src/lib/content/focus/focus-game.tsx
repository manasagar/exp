import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Magnifier from 'react-native-magnifier';
import { Animated, ProgressBar } from 'react-native-animated';

export default FocusGame = () => {
  const [timer, setTimer] = useState(30);
  const [burnedArea, setBurnedArea] = useState(0);
  const [isDistracted, setIsDistracted] = useState(false);
  const distractionTimeout = useRef(null);
  const sunPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        // Handle game end
      }
    }, 1000);

    // Randomly show distraction
    distractionTimeout.current = setTimeout(() => {
      setIsDistracted(true);
      setTimeout(() => setIsDistracted(false), 5000); // Hide after 5 seconds
    }, Math.random() * 5000 + 3000);

    return () =>
      clearInterval(interval) && clearTimeout(distractionTimeout.current);
  }, []);

  const handleBurning = (x, y) => {
    // Calculate burned area based on touch position
    setBurnedArea(burnedArea + 1); // Update based on your burning logic
  };

  const animateSun = () => {
    Animated.timing(sunPosition, {
      toValue: { x: 300, y: 200 },
      duration: 3000,
      useNativeDriver: true,
    }).start(() => animateSun()); // Loop animation
  };

  useEffect(() => {
    animateSun();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./paper.png')} style={styles.paper} />
      <Animated.View style={[styles.sun, sunPosition.getLayout()]}>
        <Image source={require('./sun.png')} style={styles.sunImage} />
      </Animated.View>
      <Magnifier
        source={require('./paper.png')}
        style={styles.magnifier}
        onMove={handleBurning}
      />
      <Text style={styles.timer}>{timer}s</Text>
      <ProgressBar progress={burnedArea / 100} style={styles.progressBar} />
      {isDistracted && (
        <View style={styles.distraction}>
          <Text style={styles.distractionText}>Distraction!</Text>
          {/* Add your distraction image and description here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: 300,
    height: 200,
  },
  sun: {
    position: 'absolute',
  },
  sunImage: {
    width: 50,
    height: 50,
  },
  magnifier: {
    width: 100,
    height: 100,
  },
  timer: {
    fontSize: 30,
  },
  progressBar: {
    width: 200,
    marginTop: 20,
  },
  distraction: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  distractionText: {
    color: 'white',
  },
});
