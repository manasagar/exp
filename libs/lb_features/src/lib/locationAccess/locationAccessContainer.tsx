import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import tw from 'twrnc'

const LocationAccessContainer = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // let { status } = await Location.getLastKnownPositionAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.error('Permission to access location was denied');
        return;
      }

      setPermissionGranted(true);
      await getLocation();
    })();
  }, []);

  const getLocation = async () => {
    setErrorMsg(null)
    if (!permissionGranted) {
      setErrorMsg('Location permission is not granted');
      console.error('Location permission is not granted');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={tw` m-5`}>
      <Text style={tw`text-white text-xl text-center mb-5 `}>{text}</Text>
      <Button title="Get Location"  onPress={getLocation} />
    </View>
  );
};



export default LocationAccessContainer;

