import React from 'react';

import { Container } from './styles';

interface PropsButton {
  children: React.ReactNode;
  color?: string;
}
const Button: React.FC<PropsButton> = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default Button;
