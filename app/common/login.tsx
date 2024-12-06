import * as React from 'react';
import tw from 'twrnc';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import LoginForm from '@/libs/lb_features/src/lib/auth/loginForm';
import GoogleSso from '@/libs/lb_features/src/lib/googleSso/googleSso';
import { useSelector } from 'react-redux';
import { RootState } from '@/libs/lb_data-api/src';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();
  const findBuddymessage = useSelector(
    (state: RootState) => state.buddyMessage.message
  );

  // Define the callback function
  const onLoginSuccess = (id: string) => {
    console.log(`User ${id} successfully logged in`);
    // Additional logic can be added here, such as navigation or state updates
  };

  const loginPromptMsg = () => {
    if (findBuddymessage) {
      return (
        <View style={tw`px-2 items-center`}>
          {/* Different styling for buddy session message */}
          <Text style={tw`text-2xl font-extrabold text-green-300 text-center`}>
            {findBuddymessage}
          </Text>
          {/* Different styling for save progress message */}
          <Text style={tw`text-xl font-bold py-4 text-gray-200 text-center`}>
            Save your progress – Log in now.
          </Text>
        </View>
      );
    }
  };
  

  return (
    <ScrollView contentContainerStyle={tw`flex flex-col items-center gap-2`}>
      <TouchableOpacity style={tw`self-end `} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
      {loginPromptMsg()}
      <GoogleSso onLoginSuccess={onLoginSuccess} />
      <Text style={tw`mt-3 text-white text-lg`}>OR</Text>
      <LoginForm onLoginSuccess={onLoginSuccess} />
      <View style={tw`flex flex-row`}>
        <Text style={tw`text-white text-lg`}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/common/signup')}>
          <Text style={tw`text-blue-500 text-lg`}> SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
