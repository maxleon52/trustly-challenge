import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

interface PaymentItemProps {
  isSelected: string;
}

export const DataPayment = styled.div`
  /* border: 2px solid; */
  display: flex;
  column-gap: 38px;
  width: 100%;
  max-width: 1232px;
  margin-top: 40px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 0px;
    column-gap: 0px;

    h1 {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0px;
      text-align: left;
    }

    h2 {
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0px;
      text-align: left;
    }
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

  @media (max-width: 700px) {
    /* border: 2px solid red; */
    width: 100%;
    height: 100%;
    padding: 0px !important;
    margin-top: 8px;
    row-gap: 20px;
    background: #ffffff;
  }
`;

export const Infos = styled.div`
  display: flex;

  > div {
    width: 100%;
    column-gap: 33px;

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

  @media (max-width: 700px) {
    /* border: 2px solid blue; */
    flex-direction: column;
    background: #f7f7f7;
    padding: 8px;
    border-radius: 10px;

    > div {
      display: flex;
      width: unset;
      column-gap: 26px !important;
      img {
        /* border: 2px solid; */
        width: 90px;
        height: 100px;
        border-radius: 5px;
        margin-top: 9px;
      }

      h4 {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: left;
      }

      h6 {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
      }

      > h6 {
        margin-top: 20px;
      }

      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
        color: #a5a5a5;
      }

      > article {
        /* border: 2px solid; */
        display: flex;
        flex-direction: column;
        width: 100%;

        div + div {
          margin-top: 20px;
        }
      }
    }
    section {
      /* border: 2px solid red; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 25px;

      > div {
        h6 {
          color: #000;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: left;
        }
        p {
          color: #a5a5a5;
          font-family: Arial;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0.6px;
          text-align: left;
        }
      }

      strong {
        color: #000;
        font-family: 'Mukta', sans-serif;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: left;
        margin-right: 20px;
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

  @media (max-width: 700px) {
    /* border: 2px solid red; */
    /* display: none; */
    margin-top: 0px;
    border-radius: 10px;
    padding: 10px;
    background: #f7f7f7;
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

  @media (max-width: 700px) {
    left: 15px;
    top: 28px;
    border-radius: 5px;
  }
`;

export const ContinueButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 700px) {
    /* display: none; */
    margin-top: 0px;

    button {
      width: 100%;
    }
  }
`;

export const PaymentItem = styled.div<PaymentItemProps>`
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

  border-color: ${({ id, isSelected }) =>
    id === isSelected ? Colors.greenDark : 'transparent'};
  transition: all 0.3s;

  cursor: pointer;

  @media (max-width: 700px) {
    height: 59px;

    #item-1 {
      position: absolute;
      left: 15px;
      top: 5px;
    }

    img {
      position: absolute;
      right: 10px;
    }
  }
`;
