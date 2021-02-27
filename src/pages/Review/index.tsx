import React, { useContext } from 'react';
import Breadcrumber from '../../components/Breadcrumber';
import { CartContext } from '../../contexts/Cart';

import greenBankIcon from '../../assets/green-bank-icon.svg';

import {
  Container,
  Content,
  DataPayment,
  CheckoutData,
  Infos,
  ColumnOne,
  ColumnTwo,
  ContinueButton,
} from './styles';
import Button from '../../components/Button';

const Review: React.FC = () => {
  const { productForCheckout } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <Breadcrumber />

        <DataPayment>
          <img src={productForCheckout.maxresURL} alt="foto do produto" />

          <CheckoutData>
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
          </CheckoutData>
        </DataPayment>
      </Content>
    </Container>
  );
};

export default Review;
