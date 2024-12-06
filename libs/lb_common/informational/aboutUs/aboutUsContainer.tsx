import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';
import { Header } from './components/Header';
import { Mission } from './components/Mission';
import Benefits from './components/Benefits';

export const AboutUsContainer = () => {
  return (
    <ScrollView style={tw`bg-white dark:bg-[#151718] min-h-full`}>
      <Header />
      <Mission />
      <Benefits />
    </ScrollView>
  );
};

export default AboutUsContainer;