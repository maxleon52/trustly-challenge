import React from 'react';

import { Container } from './styles';

interface Props {
  nameComponent: (name: string) => void;
}

const Message: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <div>
        <h4>
          shoes<b>.on</b>
        </h4>

        <strong>About signing into</strong>
        <strong>Online Banking</strong>

        <ul>
          <li>This is a secure connection to Chase</li>
          <li>Your bank login cannot be seen by shoes.on</li>
        </ul>

        <label htmlFor="nomessage">
          <input
            type="checkbox"
            name="nomessage"
            id="nomessage"
            style={{ background: 'trasparent' }}
          />
          Do not show this message again
        </label>
      </div>

      <footer>
        <button type="button" onClick={() => nameComponent('loginBank')}>
          OK, got it!
        </button>
      </footer>
    </Container>
  );
};

export default Message;
