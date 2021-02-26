import React from 'react';
import Routes from '../../Routes';
import Header from '../Header';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <main>
        <Routes />
      </main>
    </Container>
  );
};

export default Layout;
