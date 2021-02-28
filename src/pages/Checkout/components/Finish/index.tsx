import React from 'react';

import { Container } from './styles';

interface Props {
  nameComponent: (name: string) => void;
}

const Finish: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <button type="button" onClick={() => nameComponent('pronto terminou')}>
        Finish
      </button>
    </Container>
  );
};

export default Finish;
