import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeStackParamList, ScreenName } from '../../navigation/types';
import useHomeScreen from './hook';
import styles from './style';

type HomeScreenNavigationProp = DrawerNavigationProp<HomeStackParamList>;

const HomeScreen: React.FC = () => {
  const { username } = useHomeScreen();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {username ? `Welcome, ${username}` : 'Welcome'}
      </Text>
    
      <Button
        title="Go to User"
        onPress={() => navigation.navigate(ScreenName.User)} 
      />

      <Button
        title="Go to List of Provinces"
        onPress={() => navigation.navigate(ScreenName.ListProvince)} 
      />
    </View>
  );
};

export default HomeScreen;
