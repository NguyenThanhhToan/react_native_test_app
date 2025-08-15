// style.ts
import { StyleSheet } from 'react-native';

export const districtStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});
