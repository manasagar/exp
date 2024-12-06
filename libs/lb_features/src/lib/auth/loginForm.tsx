import React, { useEffect, useState, useCallback, memo } from "react";
import { View, Text, TextInput, Alert, Pressable } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCreateUserDetailsMutation, useValidateUserDetailsMutation, useReplaceUserIdMutation } from "./authService";
import { getUserId } from "../../../../lb_utils/src";

interface LoginFormProps {
  onLoginSuccess: (id: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [createUserDetails] = useCreateUserDetailsMutation();
  const [validateUserDetails] = useValidateUserDetailsMutation();
  const [replaceUserId] = useReplaceUserIdMutation();

  const handleInputChange = useCallback((field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleLogin = useCallback(async (callback: (id: string) => void) => {
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      const tempUserId = await AsyncStorage.getItem("userId");
      const result = await validateUserDetails({
        login: formData.email,
        password: formData.password,
      });

      if (result?.data?.message === 'User found') {
        const newUserId = result.data.userDetails.loginDetails.userId;
        await AsyncStorage.setItem("userId", newUserId);
        
        if (tempUserId?.startsWith('xz-')) {
          await replaceUserId({
            tempUserID: tempUserId,
            actualUserID: newUserId
          });
        }

        callback(newUserId);
        router.push('/');
      } else {
        alert('Enter Correct Email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  }, [formData, validateUserDetails, replaceUserId, router]);

  return (
    <View style={tw`flex-1 justify-center`}>
      <Text style={tw`text-xl mb-5 text-white text-2xl`}>Login</Text>
      <TextInput
        style={tw`border p-3 mb-3 rounded w-84 text-white border-white text-xl`}
        placeholder="Email ID"
        placeholderTextColor="white"
        onChangeText={handleInputChange('email')}
        value={formData.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* Add password input similarly */}
    </View>
  );
};

export default memo(LoginForm);