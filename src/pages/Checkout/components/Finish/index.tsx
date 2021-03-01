import React from 'react';
import Button from '../../../../components/Button';

import { Container } from './styles';

// interface Props {
//   nameComponent: (name: string) => void;
// }

const Finish: React.FC = () => {
  return (
    <Container>
      <header>
        <h4>CHASE</h4>
        <img src="" alt="" />
      </header>

      <form>
        <label htmlFor="ischeck">
          <input type="radio" id="ischeck" name="ischeck" value="ischeck" />
          Checking Account - 6576
        </label>
        <label htmlFor="save">
          <input type="radio" id="save" name="ischeck" value="save" />
          Savings Account - 6213
        </label>

        <div>
          <p>shoes.on Transaction Authorization</p>
          <p>
            Today, being 5/6/2019 09:55:37 AM GMT-03, by clicking Continue, I
            agree to the Terms of Use and authorize shoes.on to use my bank
            account, as identified below, as a payment method and to debit it
            via an electronic
          </p>
        </div>
        <span>Printable version</span>

        <Button
          // onClick={() => console.log('agora vai.')}
          style={{ width: '100%', marginTop: '20px' }}
          color="#0078cd"
        >
          Continue
        </Button>
      </form>
    </Container>
  );
};

export default Finish;
