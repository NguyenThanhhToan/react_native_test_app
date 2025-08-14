// app/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/rootNavigator';
import { store } from './redux/store/appStore';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
