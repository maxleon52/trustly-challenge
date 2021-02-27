import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumber from '../../components/Breadcrumber';
import { CartContext } from '../../contexts/Cart';

import flagsMore from '../../assets/flagsMore.png';
import flagsMasterVisa from '../../assets/flagsMasterVisa.png';
import flagsApple from '../../assets/flagApple.png';

import {
  Container,
  Content,
  DataPayment,
  CheckoutData,
  Infos,
  PaymentMethod,
  Badger,
  ContinueButton,
} from './styles';
import Button from '../../components/Button';

const Checkout: React.FC = () => {
  const { productForCheckout } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <Breadcrumber />

        <DataPayment>
          <img src={productForCheckout.maxresURL} alt="foto do produto" />

          <CheckoutData>
            <Infos>
              <div>
                <h4>Cart total</h4>
                <h6>SS Sneaker</h6>
                <div>
                  <p>x 1 Green Size 41</p>
                  <p>Item #35ggjd065168</p>
                </div>
              </div>
              <div>
                <h4>Delivery details</h4>
                <div>
                  <p>John Smith</p>
                  <p>Phone no: 01312428200</p>
                  <p>Address: Redwood city, 2000.</p>
                </div>

                <section>
                  <div>
                    <h6>Total cost</h6>
                    <p>Delivery included</p>
                  </div>
                  <strong>$100</strong>
                </section>
              </div>
            </Infos>

            <PaymentMethod>
              <h4>Select your payment method</h4>
              <div>
                <Badger>
                  <span>SAVE 10%</span>
                </Badger>
                <p>Online Banking</p>

                <img
                  src={flagsMore}
                  alt="bandeiras"
                  style={{ height: '28px', width: '176px' }}
                />
              </div>
              <div>
                <p>Card payment</p>

                <img
                  src={flagsMasterVisa}
                  alt="bandeiras master visa"
                  style={{ width: '85px', height: '24px' }}
                />
              </div>
              <div>
                <p>Apple Pay</p>

                <img
                  src={flagsApple}
                  alt="bandeiras"
                  style={{ width: '66px', height: '35px' }}
                />
              </div>
            </PaymentMethod>

            <ContinueButton>
              <Link to="/review">
                <Button>Continue</Button>
              </Link>
            </ContinueButton>
          </CheckoutData>
        </DataPayment>
      </Content>
    </Container>
  );
};

export default Checkout;
