// MainTab.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SettingsScreen from '../screens/setting';
import HomeStack from './HomeStack';
import { RootTabParamList, ScreenName } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function MainTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ScreenName.Home} component={HomeStack} />
      <Tab.Screen name={ScreenName.Setting} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
