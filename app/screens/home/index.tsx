// HomeScreen.tsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import useHomeScreen from './hook';
import styles from './style';

const HomeScreen = () => {
  const { username, handleLogout } = useHomeScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {username ? `Welcome, ${username}` : 'Welcome'}
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
