// HomeScreen.tsx
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import MenuCard from '../../components/homeCard';
import { HomeStackParamList, ScreenName } from '../../navigation/types';
import { useHomeScreen } from './hook';
import { homeStyles } from './style';

type HomeScreenNavigationProp = DrawerNavigationProp<HomeStackParamList>;

interface MenuItem {
  title: string;
  screen: ScreenName;
}

const menuItems: MenuItem[] = [
  { title: 'Người dùng', screen: ScreenName.User },
  { title: 'Vị trí', screen: ScreenName.ListProvince },
];

const HomeScreen: React.FC = () => {
  const { username } = useHomeScreen();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = (screen: ScreenName) => {
    switch (screen) {
      case ScreenName.User:
        navigation.navigate(ScreenName.User);
        break;
      case ScreenName.ListProvince:
        navigation.navigate(ScreenName.ListProvince);
        break;
    }
  };

  const renderMenuItem = ({ item }: ListRenderItemInfo<MenuItem>) => (
    <MenuCard title={item.title} onPress={() => handlePress(item.screen)} />
  );

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.welcomeText}>
        {username ? `Welcome, ${username}` : 'Welcome'}
      </Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.screen}
        numColumns={2}
        columnWrapperStyle={homeStyles.row}
        renderItem={renderMenuItem}
        contentContainerStyle={[homeStyles.listContent, { paddingTop: 16 }]} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
