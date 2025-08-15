// ProvinceScreen.tsx
import { HomeStackParamList, ScreenName } from '@/app/navigation/types';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { useProvinceScreen } from './hook';
import { provinceStyles } from './style';

interface Province {
  id: number;
  name: string;
}

type HomeScreenNavigationProp = DrawerNavigationProp<HomeStackParamList>;

export default function ProvinceScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { provinces, loading, fetching, error, refresh } = useProvinceScreen();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const handlePress = (province: Province) => {
    navigation.navigate(ScreenName.District, { provinceId: province.id, provinceName: province.name });
  };

  const renderProvinceItem: ListRenderItem<Province> = ({ item }) => (
    <TouchableOpacity style={provinceStyles.itemContainer} onPress={() => handlePress(item)}>
      <Text style={provinceStyles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={provinceStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải tỉnh/thành phố...</Text>
      </View>
    );
  }

  if (error) {
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error, null, 2);
    return (
      <View style={provinceStyles.loadingContainer}>
        <Text>Error: {errorMessage}</Text>
      </View>
    );
  }

  return (
    <View style={provinceStyles.container}>
      {/* AppBar */}
      <View style={provinceStyles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={provinceStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={provinceStyles.title}>Danh sách tỉnh/thành phố</Text>
        <TouchableOpacity onPress={handleRefresh} style={provinceStyles.refreshButton}>
          {refreshing || fetching ? (
            <ActivityIndicator size="small" color="#676767" />
          ) : (
            <Ionicons name="refresh" size={20} color="#676767" />
          )}
        </TouchableOpacity>
      </View>

      {/* List tỉnh */}
      <FlatList
        contentContainerStyle={provinceStyles.listContent}
        data={provinces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProvinceItem}
        ListEmptyComponent={() => <Text style={provinceStyles.emptyText}>Không có dữ liệu tỉnh/thành phố</Text>}
      />
    </View>
  );
}
