import React from 'react';

import greenBankIcon from '../../../assets/green-bank-icon.svg';

import Button from '../../../components/Button';

import { Infos, ColumnOne, ColumnTwo, ContinueButton } from './styles';

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
        <h4>Order Summary</h4>
        <section>
          <img src={product.maxresURL} alt="foto produto" />
          <div>
            <strong>{product.description}</strong>
            <p>{`x 1 ${product.color} Size 41`}</p>
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
          <span>${product.price}</span>
        </section>
      </ColumnTwo>
      <ContinueButton>
        <Button>Place order</Button>
      </ContinueButton>
    </Infos>
  );
};

export default Review;
