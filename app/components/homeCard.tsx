// MenuCard.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MenuCardProps {
  title: string;
  onPress: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});
