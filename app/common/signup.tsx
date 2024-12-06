import RegisterForm from "@/libs/lb_features/src/lib/auth/registerForm";
import * as React from "react";
import { ScrollView} from "react-native";

export default function Signup() {
  return (
    <ScrollView>      
      <RegisterForm />
    </ScrollView>
  );
}
