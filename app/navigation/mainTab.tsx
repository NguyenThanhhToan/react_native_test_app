// MainTab.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SettingsScreen from '../screens/setting';
import HomeStack from './HomeStack';
import { RootTabParamList, TabName } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function MainTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={TabName.HomeTab} component={HomeStack} />
      <Tab.Screen name={TabName.SettingTab} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
