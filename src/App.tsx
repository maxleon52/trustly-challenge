/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './contexts/Cart';

import Layout from './components/Layout';
import Global from './styles/Global';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout />
        <Global />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
