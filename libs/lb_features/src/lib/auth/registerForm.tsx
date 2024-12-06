import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { useCreateUserDetailsMutation, useReplaceUserIdMutation } from "./authService";
import { getUserId } from "../../../../lb_utils/src";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [userId, setUserID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [createUserDetails] = useCreateUserDetailsMutation();
  const [replaceUserId] = useReplaceUserIdMutation();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleRegister = useCallback(async () => {
    try {
      // Validate email format
      if (!emailPattern.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
      }

      // Validate password length and match
      if (password.length < 8) {
        Alert.alert("Password Error", "Password must be at least 8 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Password Mismatch", "Passwords do not match.");
        return;
      }

      const tempUserId = await AsyncStorage.getItem("userId");
      const id = await getUserId();
      setUserID(id);

      const updatedUserDetails = {
        loginDetails: {
          customLogin: {
            loginId: email,
            password: password,
          },
          userId: id,
          signUpMethod: "custom",
        },
        userDetails: {
          contactDetails: {
            email: email,
          },
        },
      };

      // Create user details and handle potential errors
      const createUserResponse = await createUserDetails(updatedUserDetails).unwrap();
      if (createUserResponse) {
        Alert.alert("Success", "Registration successful. You can now log in.");
        router.push("/common/login");
      }

      // Handle temporary user replacement
      if (tempUserId?.startsWith("xz-")) {
        const replacePayload = {
          tempUserID: tempUserId,
          actualUserID: id,
        };
        const replaceUserResponse = await replaceUserId(replacePayload).unwrap();
        if (replaceUserResponse) {
          Alert.alert("Profile Updated", "Temporary user ID replaced successfully.");
        }
      }
    } catch (error: any) {
      // Provide user feedback in case of errors
      Alert.alert("Registration Error", error?.message || "An error occurred. Please try again.");
      console.error("Error during registration:", error);
    }
  }, [email, password, confirmPassword, createUserDetails, replaceUserId]);

  return (
    <View style={tw`flex-1 justify-center p-5 my-5`}>
      <Text style={tw`text-2xl mb-5 text-white`}>Register</Text>
      
      {/* Email Input */}
      <TextInput
        style={tw`border border-white p-3 mb-3 rounded text-lg text-white`}
        placeholder="Email ID"
        placeholderTextColor="white"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Password Input */}
      <TextInput
        style={tw`border border-white p-3 mb-3 rounded text-lg text-white`}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        textContentType="password"
        onChangeText={setPassword}
        value={password}
      />
      
      {/* Confirm Password Input */}
      <TextInput
        style={tw`border border-white p-3 mb-3 rounded text-lg text-white`}
        placeholder="Confirm Password"
        placeholderTextColor="white"
        secureTextEntry
        textContentType="password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      {/* Register Button */}
      <TouchableOpacity onPress={handleRegister} style={tw`bg-blue-500 p-3 rounded`}>
        <Text style={tw`text-white text-xl text-center`}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;
