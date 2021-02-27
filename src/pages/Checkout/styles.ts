import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  max-width: 1200px;
`;

export const DataPayment = styled.div`
  /* border: 2px solid; */
  display: flex;
  column-gap: 38px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;

  img {
    width: 532px;
    height: 633px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const CheckoutData = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  width: 731.55px;
  height: 633px;
  border-radius: 10px;
  padding: 29px 38px;
`;

export const Infos = styled.div`
  display: flex;

  > div {
    width: 100%;

    /* for 'p' */
    > div {
      margin-top: 13px;
    }

    h4 {
      height: 28px;
      width: 209px;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0px;
      text-align: left;
    }

    h6 {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
    }

    > h6 {
      margin-top: 20px;
    }

    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      color: #a5a5a5;
    }

    section {
      display: flex;
      align-self: baseline;
      justify-content: space-between;
      margin-top: 20px;

      strong {
        font-size: 44px;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 0px;
        text-align: left;
        margin-right: 24px;
      }
    }
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h4 {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    position: relative;
    margin-top: 20px;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 0px 15px;
    background: #fff;
  }
`;

export const Badger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  left: 15px;
  top: -10px;
  background: #ffcc00;
  border-radius: 2px;
  height: 18px;
  width: 76px;
  text-align: center;

  span {
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0px;
    text-align: center;
    color: #9e7d27;
  }
`;

export const ContinueButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
