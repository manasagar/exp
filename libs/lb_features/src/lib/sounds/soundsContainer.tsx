import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Audio } from 'expo-av';

const SoundsContainer = forwardRef((props, ref) => {
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/tom-1.mp3')
        );
        soundRef.current = sound;
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    loadSound();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    playSound: async () => {
      if (soundRef.current) {
        try {
          await soundRef.current.replayAsync();
        } catch (error) {
          console.error('Error playing sound:', error);
        }
      }
    },
  }));

  return null;
});

export default SoundsContainer;
