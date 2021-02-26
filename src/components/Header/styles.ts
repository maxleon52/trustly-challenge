import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.grey};
  width: 100%;
  height: 87px;

  > div {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 34px;
      width: 115px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 17.4025px;

      svg {
        margin-right: 8.7px;
      }
    }

    h1 {
      width: 113.12px;
      height: 31.36px;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 26.1038px;
      line-height: 30px;
      text-align: center;
    }
  }
`;

export const Separator = styled.div`
  /* border: 2px solid blue; */
  height: 34px;
  width: 115px;
  background: transparent;
`;
