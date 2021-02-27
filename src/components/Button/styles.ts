import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

interface Props {
  color?: string;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  width: 302px;
  border-radius: 5px;
  background-color: ${({ color }) => color || Colors.greenDark};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  transition: all 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;
