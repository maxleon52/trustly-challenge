/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import flagsMore from '../../../assets/flagsMore.png';
import flagsMasterVisa from '../../../assets/flagsMasterVisa.png';
import flagsApple from '../../../assets/flagApple.png';

import {
  DataPayment,
  CheckoutData,
  Infos,
  PaymentMethod,
  Badger,
  ContinueButton,
  PaymentItem,
} from './styles';
import Button from '../../../components/Button';
import ReviewMobile from '../../Review/ReviewMobile';

interface ProductProps {
  color: string;
  description: string;
  maxresURL: string;
  price: string;
}

const DataPaymentMobile: React.FC = () => {
  const [isSelected, setIsSelected] = useState<string>('1');
  const [isLarger, setIsLarger] = useState<boolean>(false);
  const [approvated, setApprovated] = useState(false);

  const [product] = useState<ProductProps>(() => {
    const storagedProduct = localStorage.getItem('@Trustly:product');

    if (storagedProduct) {
      return JSON.parse(storagedProduct);
    }

    return {};
  });

  function handleOpenModal() {
    document
      .querySelector('#overlayModal')
      ?.classList.replace('before', 'after');
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 700px)').matches) {
      setIsLarger(true);
    } else {
      setIsLarger(false);
    }
  }, [isLarger]);

  useEffect(() => {
    const isApprovated = window.isConfirm;
    if (isApprovated === true) {
      setApprovated(true);
    }
  }, [window.isConfirm]);

  return (
    <DataPayment>
      <h1>Checkout</h1>
      <CheckoutData>
        {approvated === false ? (
          <>
            <Infos>
              <div>
                <img src={product.maxresURL} alt="foto do produto" />

                <article>
                  <div>
                    <h4>{product.description}</h4>
                    <p>{`x 1 ${product.color} Size 41`}</p>
                    <p>Item #35ggjd065168</p>
                  </div>
                  <div>
                    <h6>Delivery details</h6>
                    <p>John Smith</p>
                    <p>Phone no: 01312428200</p>
                    <p>Address: Redwood city, 2000.</p>
                  </div>
                </article>
              </div>

              <section>
                <div>
                  <h6>Total cost</h6>
                  <p>Delivery included</p>
                </div>
                <strong>${product.price}</strong>
              </section>
            </Infos>

            <h2>Payment method</h2>
            <PaymentMethod>
              <PaymentItem
                id="1"
                isSelected={isSelected}
                onClick={() => setIsSelected('1')}
              >
                <Badger>
                  <span>SAVE 10%</span>
                </Badger>
                <p id="item-1">Online Banking</p>

                <img
                  src={flagsMore}
                  alt="bandeiras"
                  style={{
                    height: isLarger ? '20px' : '28',
                    width: isLarger ? '130px' : '176px',
                  }}
                />
              </PaymentItem>
              <PaymentItem
                id="2"
                isSelected={isSelected}
                onClick={() => setIsSelected('2')}
              >
                <p>Card payment</p>

                <img
                  src={flagsMasterVisa}
                  alt="bandeiras master visa"
                  style={{
                    width: isLarger ? '70px' : '85px',
                    height: isLarger ? '20px' : '24px',
                  }}
                />
              </PaymentItem>
              <PaymentItem
                id="3"
                isSelected={isSelected}
                onClick={() => setIsSelected('3')}
              >
                <p>Apple Pay</p>

                <img
                  src={flagsApple}
                  alt="bandeiras"
                  style={{
                    width: isLarger ? '60px' : '66px',
                    height: isLarger ? '30px' : '35px',
                  }}
                />
              </PaymentItem>
            </PaymentMethod>
            <ContinueButton>
              <Button onClick={handleOpenModal}>Continue</Button>
            </ContinueButton>
          </>
        ) : (
          <ReviewMobile product={product} />
        )}
      </CheckoutData>
    </DataPayment>
  );
};

export default DataPaymentMobile;
