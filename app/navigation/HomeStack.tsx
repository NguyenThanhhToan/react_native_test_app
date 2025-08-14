// HomeStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home';
import ListProvinceScreen from '../screens/listProvince';
import UserScreen from '../screens/user';
import { ScreenName } from './types';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
      <Stack.Screen name={ScreenName.User} component={UserScreen} />
      <Stack.Screen name={ScreenName.ListProvince} component={ListProvinceScreen} />
    </Stack.Navigator>
  );
}
