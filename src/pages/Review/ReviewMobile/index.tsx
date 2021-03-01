import React from 'react';

import greenBankIcon from '../../../assets/green-bank-icon.svg';

import { Infos, ColumnOne, ColumnTwo, ContinueButton } from './styles';
import Button from '../../../components/Button';

const Review: React.FC = () => {
  return (
    <Infos>
      <ColumnOne>
        <h4>Order Summary</h4>
        <section>
          <img src="" alt="" />
          <div>
            <strong>SS Sneaker</strong>
            <p>x 1 Green Size 41</p>
            <p>Item #35ggjd065168</p>
          </div>
        </section>
      </ColumnOne>

      <ColumnTwo>
        <h4>Payment Method</h4>
        <div>
          <img src={greenBankIcon} alt="bank icon" />
          <strong>Online Banking</strong>
        </div>
        <section>
          <div>
            <strong>Total cost</strong>
            <p>Delivery included</p>
          </div>
          <span>$100</span>
        </section>
      </ColumnTwo>
      <ContinueButton>
        <Button>Place order</Button>
      </ContinueButton>
    </Infos>
  );
};

export default Review;
