import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, Button, View } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import ProfileContainer from '@/libs/lb_features/src/lib/auth/profileContainer';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import LoadingScreen from '../loadingScreen';

export default function Profile() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoadingUserId, setIsLoadingUserId] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
      }
      setIsLoadingUserId(false);
    };

    fetchUserId();
  }, []);

  if (isLoadingUserId) {
    return <LoadingScreen />; // Use the LoadingScreen component here
  }

  return (
    <ScrollView contentContainerStyle={tw`flex flex-col items-center`}>
      <>
        <ProfileContainer />
      </>
    </ScrollView>
  );
}
