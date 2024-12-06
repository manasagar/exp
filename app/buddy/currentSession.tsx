import CurrentSessionContainer from "@/libs/lb_buddy/src/lib/currentSession/currentSessionContainer";
import * as React from "react";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <CurrentSessionContainer />
    </ScrollView>
  );
}
