import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  /* height: calc(100vh - 87px); */

  @media (max-width: 700px) {
    display: grid;
  }
`;

export const Content = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 81px;

  @media (max-width: 700px) {
    display: grid;
    margin-top: -5px;
  }
`;

export const Header = styled.div`
  border-bottom: 2px solid ${Colors.grey};
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1232px;

  input {
    flex: 1;
    height: 100%;
    text-align: center;
    border: none;
    ::placeholder {
      color: ${Colors.textLight};
    }
  }
  @media (min-width: 1px) and (max-width: 700px) {
    padding: 5px;

    svg {
      height: 22px;
    }
  }
`;

export const ListProducts = styled.div`
  /* border: 2px solid red; */
  margin-top: 57px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 66px 85px;
  /* align-self: center; */
  /* justify-self: center; */
  width: 100%;
  max-width: 1232px;

  > div {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
  }

  @media (min-width: 1px) and (max-width: 700px) {
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin-top: 27px;
  }
`;
