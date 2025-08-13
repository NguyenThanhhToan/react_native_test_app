import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import useLogin from './hook';
import styles from './style';

const LoginScreen: React.FC = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
export default LoginScreen;