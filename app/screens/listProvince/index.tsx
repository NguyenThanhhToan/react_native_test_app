import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useProvinceScreen } from './hook';
import { styles } from './style';

export default function ProvinceScreen() {
  const navigation = useNavigation();
  const { provinces, loading, error } = useProvinceScreen();

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  if (error) {
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error, null, 2);
    return <Text>Error: {errorMessage}</Text>;
  }

  const handlePress = (id: number, name: string) => {
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#676767ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Danh sách tỉnh/thành phố</Text>
      </View>

      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={provinces}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handlePress(item.id, item.name)}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
