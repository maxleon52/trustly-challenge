import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  /* height: calc(100vh - 87px); */
`;

export const Content = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 81px;
`;

export const Header = styled.div`
  border-bottom: 2px solid ${Colors.grey};
  display: flex;
  align-items: center;
  padding: 0px 40px 20px;
  width: 100%;
  max-width: 1200px;

  input {
    flex: 1;
    height: 100%;
    text-align: center;
    border: none;
    ::placeholder {
      color: ${Colors.textLight};
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
  max-width: 1200px;

  > div {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
  }
`;
