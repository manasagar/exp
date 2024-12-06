import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ANDROID_CLIENT_ID, WEB_CLIENT_ID } from '../../../../lb_common/commonConstants';
import { useRouter } from 'expo-router';
import { useCreateUserDetailsMutation, useValidateUserDetailsMutation, usePatchUserDetailsMutation, useReplaceUserIdMutation } from '../auth/authService';
import { getUserId } from '../../../../lb_utils/src';
import { RootState } from '../../../../lb_data-api/src';
import { useSelector } from 'react-redux';

WebBrowser.maybeCompleteAuthSession();

interface GoogleSsoProps {
  onLoginSuccess: (id: string) => void;
}

const GoogleSso: React.FC<GoogleSsoProps> = ({ onLoginSuccess }) => {
  const loginRedirect = useSelector((state: RootState) => state.loginRedirect.loginRedirect);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  const [createUserDetails] = useCreateUserDetailsMutation();
  const [replaceUserId] = useReplaceUserIdMutation();
  const [validateUserDetails] = useValidateUserDetailsMutation();
  const [patchUserDetails] = usePatchUserDetailsMutation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      handleSignInWithGoogle(response.authentication?.accessToken, onLoginSuccess);
    }
  }, [response]);

  const handleSignInWithGoogle = async (token: string, callback: (id: string) => void) => {
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userDetails = await response.json();
      setUserInfo(userDetails);
      setUserId(userDetails.id);

      const result = await validateUserDetails({ id: userDetails.id });

      if (result?.data?.message === 'User found') {
        console.log('User already exists:', result.data.userDetails);
        await AsyncStorage.setItem("userId", result.data.userDetails.loginDetails.userId);
      } else {
        const payload = {
          loginDetails: {
            google: {
              id: userDetails.id,
            },
            userId: userDetails.id,
            signUpMethod: "google",
          },
          userDetails: {
            name: userDetails.name,
            contactDetails: {
              email: userDetails.email,
            },
            profilePicture: userDetails.picture,
          },
        };

        await createUserDetails(payload);
        await AsyncStorage.setItem("userId", payload.loginDetails.userId);
      }

      const storedUserId = await AsyncStorage.getItem("userId");
      callback(storedUserId);
      
      // Close the pop-up window
      if (window.opener) {
        window.close();
      }

      loginRedirect ? router.push(loginRedirect) : router.push('/');
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <View style={tw`gap-2`}>
      <TouchableOpacity
        style={tw`flex-row items-center bg-[#4285F4] rounded shadow`}
        onPress={() => promptAsync()}
      >
        <View style={tw`bg-white p-2`}>
          <Image
            source={{ uri: 'https://www.google.com/favicon.png' }}
            style={tw`w-5 h-5 p-3 m-1`}
          />
        </View>
        <Text style={tw`text-white m-1 font-semibold text-base`}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleSso;