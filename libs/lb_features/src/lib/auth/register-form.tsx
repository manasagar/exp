import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';
import { API_URL } from '../../../../lb_utils/src';
import { useRouter } from 'expo-router';

const RegisterForm: React.FC = () => {
  const router = useRouter(); // Assuming useRouter is a custom hook from expo-router
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleRegister = async () => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      alert(result.message);
      if (response.status === 201) {
        alert('Registration successful. You can now log in.');
        router.push('/common/login');
      }
    } catch (error) {
      if(error == 'Error: User already exists. Please login to continue.'){
        router.push('/common/login')
      }
      console.error(error);
      alert(error ||  'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={tw`flex-1 justify-center p-5 my-5`}>
      <Text style={tw`text-xl mb-5`}>Register</Text>
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
      <TextInput
        style={tw`border p-3 mb-3 rounded`}
        placeholder="Confirm Password"
        secureTextEntry
        textContentType="password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity onPress={handleRegister} style={tw`bg-blue-500 p-3 rounded`}>
        <Text style={tw`text-white text-center`}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;
