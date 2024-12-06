import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import tw from 'twrnc';

const AppInstallBtn = ({
  label,
  url,
  wrapperTwClasses = `transition hover:bg-blue-700 bg-blue-500 text-white p-2 rounded mb-2 self-start w-max`,
}) => {
  const handleButtonClick = async () => {
    if (url) {
      await Linking.openURL(url);
    }
  };
  return (
    <Pressable style={tw.style(wrapperTwClasses)} onPress={handleButtonClick}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default AppInstallBtn;
