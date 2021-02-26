import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  /* border: 2px solid; */
  display: flex;
  flex-direction: column;
  width: 297px;
  height: 373px;
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 171px;
    object-fit: cover;
  }

  > div {
    /* border: 2px solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 17px;
    margin-top: 10px;

    h4 {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: center;
    }

    > div {
      /* border: 2px solid; */
      width: 100%;
      height: 50px;
    }

    strong {
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  width: 275px;
  height: 41.77px;
  background: ${Colors.greenDark};
  border-radius: 4.50483px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #8d8d8d;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 27px;
    width: 69px;
    border-radius: 25px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 25.2271px;
  }
`;
