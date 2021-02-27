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
  max-width: 1232px;
`;

export const DataPayment = styled.div`
  /* border: 2px solid; */
  display: flex;
  column-gap: 38px;
  width: 100%;
  max-width: 1232px;
  margin-top: 40px;
  height: 562px;

  img {
    width: 532px;
    height: 562px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const CheckoutData = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  width: 731.55px;
  height: 562px;
  border-radius: 10px;
  padding: 64px 50px;
`;

export const Infos = styled.div`
  display: flex;
`;

export const ContinueButton = styled.div`
  margin-top: 119px !important;
  display: flex;
  justify-content: flex-end;
`;

export const ColumnOne = styled.div`
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
    margin-top: 82px;

    strong {
      font-family: 'Mukta', sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 44px;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 32px;
    }

    p {
      width: 134px;
    }
  }
`;

export const ColumnTwo = styled.div`
  margin-left: 32px;
  > div {
    display: flex;
    align-items: center;
    margin-top: 20px;

    img {
      width: 47px;
      height: 47px;
    }

    strong {
      margin-left: 12px;
    }
  }
`;
