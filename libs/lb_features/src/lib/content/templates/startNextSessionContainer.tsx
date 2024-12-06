import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { router } from 'expo-router';
import tw from 'twrnc';
import { useSelectorWrap } from '../../../../../lb_data-api/src';


export default function StartNextSessionContainer() {
  // Safely extracting `route` from `nextSession` if it exists
  const {
    data: {
      nextSession: { route } = {}, // Destructure safely with fallback
    } = {}, // Fallback to empty object if `data` is undefined
  } = useSelectorWrap('onLastCard_rn');


  const handleStartNewSession = () => {
    if (route) {
      // If route is defined, navigate to the route
      router.push(route);
    } else {
      console.error('No route found for next session');
    }
  };


  const handleNo = () => {
    // Navigate to the home route
    router.push('/');
  };


  return (
    <View style={tw`flex-1 p-5  mt-10`}>
      <View style={tw`mb-5`}>
        <Text style={tw`text-center text-lg text-white`}>
          Great job finishing your session! Ready to dive into the next one?
        </Text>
      </View>
      <View style={tw`flex-row justify-center gap-4`}>
        <View>
          <Button
            title="Yes, Start a New Session!"
            onPress={handleStartNewSession}
            color="#4CAF50"
          />
        </View>
        <View>
          <Button
            title="Not Now"
            onPress={handleNo}
            color="#F44336"
          />
        </View>
      </View>
    </View>
  );
}



