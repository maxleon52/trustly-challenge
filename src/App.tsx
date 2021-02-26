/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Global from './styles/Global';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Global />
    </BrowserRouter>
  );
}

export default App;
