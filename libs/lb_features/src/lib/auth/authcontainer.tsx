import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const AuthContainer: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={tw`flex justify-center`}>
      <LoginForm />
      <RegisterForm />
    </ScrollView>
  );
};

export default AuthContainer;
