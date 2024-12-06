import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import LocationAccessContainer from "@/libs/lb_features/src/lib/locationAccess/locationAccessContainer";
import ReferralContainer from "@/libs/lb_features/src/lib/referrals/referralContainer";
import CertificateGenerationContainer from "@/libs/lb_features/src/lib/certificateGeneration/certificateGenerationContainer";

export default function Demo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <LocationAccessContainer />
        <CertificateGenerationContainer />
        <ReferralContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});
