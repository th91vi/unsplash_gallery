import React from 'react';
import { Provider } from 'react-redux'

import Header from './components/Header/index'
import ImageGrid from './components/ImageGrid/index'
import './App.css';

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ImageGrid />
    </Provider>
  );
}

export default App;
