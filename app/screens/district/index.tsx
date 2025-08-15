// DistrictScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { HomeStackParamList, ScreenName } from '../../navigation/types';
import { useGetDistrictsQuery } from '../../service/locationApi';
import { districtStyles } from './style';

type DistrictRouteProp = RouteProp<HomeStackParamList, ScreenName.District>;

interface District {
  id: number;
  name: string;
}

export default function DistrictScreen() {
  const navigation = useNavigation();
  const route = useRoute<DistrictRouteProp>();
  const { provinceId, provinceName } = route.params;

  const { data: districts, isLoading, isError } = useGetDistrictsQuery(provinceId);

  const renderDistrictItem: ListRenderItem<District> = ({ item }) => (
    <View style={districtStyles.itemContainer}>
      <Text style={districtStyles.itemText}>{item.name}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={districtStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải huyện...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={districtStyles.loadingContainer}>
        <Text>Lỗi khi tải dữ liệu huyện</Text>
      </View>
    );
  }

  return (
    <View style={districtStyles.container}>
      <View style={districtStyles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={districtStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={districtStyles.title}>{provinceName}</Text>
      </View>

      <FlatList
        contentContainerStyle={districtStyles.listContent}
        data={districts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDistrictItem}
        ListEmptyComponent={() => (
          <Text style={districtStyles.emptyText}>Không có dữ liệu huyện</Text>
        )}
      />
    </View>
  );
}
