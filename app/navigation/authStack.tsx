// AuthStack.tsx 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/login';
import { AuthStackParamList, ScreenName } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name= {ScreenName.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
}