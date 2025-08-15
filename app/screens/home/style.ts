// style.ts
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'left',
  },
  listContent: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: cardWidth,
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
