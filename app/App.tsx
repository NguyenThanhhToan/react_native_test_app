// App.tsx
import { store } from '@/app/redux/store/appStore';
import 'expo-router/entry';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>{}<></></Provider>
  );
}


