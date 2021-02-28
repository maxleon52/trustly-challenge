import React from 'react';

import { Container } from './styles';

interface Props {
  nameComponent: (name: string) => void;
}

const LoginBank: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <button type="button" onClick={() => nameComponent('finish')}>
        LoginBank
      </button>
    </Container>
  );
};

export default LoginBank;
