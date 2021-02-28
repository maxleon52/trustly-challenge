import React from 'react';

import { Container } from './styles';

interface Props {
  nameComponent: (name: string) => void;
}

const Message: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <button type="button" onClick={() => nameComponent('loginBank')}>
        Message
      </button>
    </Container>
  );
};

export default Message;
