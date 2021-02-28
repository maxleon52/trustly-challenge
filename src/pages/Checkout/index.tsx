import React, { useCallback, useContext, useEffect, useState } from 'react';
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
  PaymentItem,
} from './styles';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import SelectBank from './components/SelectBank';
import Message from './components/Message';
import LoginBank from './components/LoginBank';
import Finish from './components/Finish';

const Checkout: React.FC = () => {
  const { productForCheckout } = useContext(CartContext);
  const [isSelected, setIsSelected] = useState<string>('1');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedContentModal, SetSelectedContentModal] = useState<string>(
    'selectBank',
  );

  // useEffect(() => {
  //   console.log('Nome: ', selectedContentModal);
  //   console.log('valor modal: ', isOpenModal);
  // }, [selectedContentModal, isOpenModal]);

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
    SetSelectedContentModal('selectBank');
  }

  const selectedContent = useCallback((nextPage: string) => {
    SetSelectedContentModal(nextPage);
  }, []);

  const backContent = useCallback((content: string) => {
    SetSelectedContentModal(content);
  }, []);

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
              <PaymentItem
                id="1"
                isSelected={isSelected}
                onClick={() => setIsSelected('1')}
              >
                <Badger>
                  <span>SAVE 10%</span>
                </Badger>
                <p>Online Banking</p>

                <img
                  src={flagsMore}
                  alt="bandeiras"
                  style={{ height: '28px', width: '176px' }}
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
                  style={{ width: '85px', height: '24px' }}
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
                  style={{ width: '66px', height: '35px' }}
                />
              </PaymentItem>
            </PaymentMethod>

            <ContinueButton>
              <Button onClick={handleOpenModal}>Continue</Button>
            </ContinueButton>
          </CheckoutData>
        </DataPayment>
      </Content>
      {isOpenModal && (
        <Modal
          onCancel={() => setIsOpenModal(!isOpenModal)}
          currentContentModal={selectedContentModal}
          backContent={backContent}
        >
          {selectedContentModal === 'selectBank' && (
            <SelectBank nameComponent={selectedContent} />
          )}
          {selectedContentModal === 'message' && (
            <Message nameComponent={selectedContent} />
          )}
          {selectedContentModal === 'loginBank' && (
            <LoginBank nameComponent={selectedContent} />
          )}
          {selectedContentModal === 'finish' && (
            <Finish nameComponent={selectedContent} />
          )}
          {selectedContentModal === undefined && (
            <>{setIsOpenModal(!isOpenModal)}</>
          )}
        </Modal>
      )}
    </Container>
  );
};

export default Checkout;
