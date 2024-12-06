import ServicesContainer from "@/libs/lb_common/services/servicesContainer";

import { useRouter } from "expo-router";
import * as React from "react";
import { ScrollView } from "react-native";
import tw from "twrnc";

export default function Services() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={tw`flex flex-col items-center gap-2 `}
      style={{ backgroundColor: '#131927' }}
      showsVerticalScrollIndicator={false} // Hide the scrollbar
    >
      <ServicesContainer />
      
    </ScrollView>
  );
}
