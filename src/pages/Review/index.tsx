import React from 'react';

import greenBankIcon from '../../assets/green-bank-icon.svg';

import { Infos, ColumnOne, ColumnTwo, ContinueButton } from './styles';
import Button from '../../components/Button';

interface ProductProps {
  color: string;
  description: string;
  maxresURL: string;
  price: string;
}

interface ReviewProps {
  product: ProductProps;
}

const Review: React.FC<ReviewProps> = ({ product }) => {
  return (
    <Infos>
      <ColumnOne>
        <h4>Cart total</h4>
        <h6>{product.description}</h6>
        <div>
          <p>{`x 1 ${product.color} Size 41`}</p>
          <p>Item #35ggjd065168</p>
        </div>
        <section>
          <div>
            <h6>Total cost</h6>
            <p>Delivery included</p>
          </div>
          <strong>${product.price}</strong>
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
