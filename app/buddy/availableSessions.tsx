import AvailableSessionsContainer from "@/libs/lb_buddy/src/lib/availableSessions/availableSessionsContainer";
import * as React from "react";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <AvailableSessionsContainer />
    </ScrollView>
  );
}
