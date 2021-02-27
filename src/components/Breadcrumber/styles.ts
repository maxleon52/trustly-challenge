import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  border: 1px solid #e8e8e8;
  position: relative;
  width: 100%;
  max-width: 859px;
  height: 1px;
  margin: 67px auto;
`;

export const StepOne = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${Colors.green};
  left: -2px;
  top: -7px;
  z-index: 1;
`;

export const StepTwo = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${Colors.green};
  left: 50%;
  top: -7px;
  z-index: 1;
`;

export const StepThree = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${Colors.green};
  right: -2px;
  top: -7px;
  z-index: 1;
`;
