import React from 'react';

import greenBankIcon from '../../assets/green-bank-icon.svg';

import { Infos, ColumnOne, ColumnTwo, ContinueButton } from './styles';
import Button from '../../components/Button';

const Review: React.FC = () => {
  return (
    <Infos>
      <ColumnOne>
        <h4>Cart total</h4>
        <h6>SS Sneaker</h6>
        <div>
          <p>x 1 Green Size 41</p>
          <p>Item #35ggjd065168</p>
        </div>
        <section>
          <div>
            <h6>Total cost</h6>
            <p>Delivery included</p>
          </div>
          <strong>$100</strong>
        </section>
      </ColumnOne>

      <ColumnTwo>
        <strong>Payment Method</strong>
        <div>
          <img src={greenBankIcon} alt="bank icon" />
          <strong>Online Banking</strong>
        </div>
        <ContinueButton>
          <Button>Place order</Button>
        </ContinueButton>
      </ColumnTwo>
    </Infos>
  );
};

export default Review;
