import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import Accordion from './accordion';

interface SelectedPlan {
  planId: string;
  amount: number;
  name: string;
  billingCycle: string;
}

const PricingContainer = () => {

  return (
    <ScrollView style={tw`flex-1 bg-[#141927]`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-white text-xl font-bold mb-4`}>
          Choose Your Plan
        </Text>
        <View style={tw`flex flex-row flex-wrap justify-between`}>
          <Accordion  />                
        </View>
      </View>
    </ScrollView>
  );
};

export default PricingContainer;