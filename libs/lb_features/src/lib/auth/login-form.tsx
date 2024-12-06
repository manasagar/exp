import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import tw from 'twrnc';

import { API_URL } from '../../../../lb_utils/src';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        throw new Error(result.message || 'Login failed');
      }
      await AsyncStorage.setItem("@user", JSON.stringify(result?.user));
      await AsyncStorage.setItem("token", JSON.stringify(result?.token));
      console.log(result.user);
      alert(result.message);
      // Handle successful login (e.g., navigate to another screen)
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={tw`flex-1 justify-center p-5 my-5`}>
      <Text style={tw`text-xl mb-5`}>Login</Text>
      <TextInput
        style={tw`border p-3 mb-3 rounded`}
        placeholder="Email ID"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`border p-3 mb-3 rounded`}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={setPassword}
        value={password}
      />
      <Text style={tw`text-blue-500 mb-3`}>Forgot password</Text>
      <Pressable onPress={handleLogin} style={tw`bg-green-500 p-3 rounded`}>
        <Text style={tw`text-white text-center`}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
