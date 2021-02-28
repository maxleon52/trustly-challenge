import React from 'react';
import Button from '../../../../components/Button';

import { Container } from './styles';

interface Props {
  nameComponent: (name: string) => void;
}

const LoginBank: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <header>
        <h4>CHASE</h4>
        <img src="" alt="" />
      </header>
      <form>
        <div className="container">
          <div className="material-textfield">
            <input placeholder="" type="text" name="email" />
            <label>Username</label>
          </div>
        </div>

        <div className="container">
          <div className="material-textfield">
            <input placeholder="" type="password" name="password" />
            <label>Password</label>
          </div>
        </div>

        <p>
          By clicking Agree & Sign in, you agree to the PayWithMyBank®
          <span>Terms of Use.</span>
        </p>

        <Button
          onClick={() => nameComponent('finish')}
          style={{ width: '100%', marginTop: '20px' }}
          color="#0078cd"
        >
          Agree & Sign In
        </Button>
      </form>
    </Container>
  );
};

export default LoginBank;
