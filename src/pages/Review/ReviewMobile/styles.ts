import styled from 'styled-components';

export const Infos = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ColumnOne = styled.div`
  width: 100%;

  @media (max-width: 700px) {
    background: #f7f7f7;
    padding: 20px;
    border-radius: 10px;

    h4 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
    }

    section {
      display: flex;
      margin-top: 15px;
      img {
        width: 92px;
        height: 92px;
        border-radius: 5px;
        background: #fff;
        margin-right: 25px;
      }
      > div {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: left;
          margin-bottom: 10px;
        }

        p {
          color: #a5a5a5;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0px;
          text-align: left;
        }
      }
    }
  }
`;

export const ColumnTwo = styled.div`
  margin-top: 32px;

  @media (max-width: 700px) {
    background: #f7f7f7;
    padding: 20px;
    border-radius: 10px;

    h4 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
    }

    > div {
      border-bottom: 1px solid #d6d6d6;
      padding: 20px 0;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
      strong {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom: 10px;
      }
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;

      > div {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: left;
        }

        p {
          color: #a5a5a5;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0px;
          text-align: left;
        }
      }
      span {
        font-family: 'Mukta', sans-serif;
        font-size: 51px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
`;

export const ContinueButton = styled.div`
  margin-top: 20px !important;
  display: flex;
  justify-content: flex-end;

  button {
    width: 100%;
  }
`;
