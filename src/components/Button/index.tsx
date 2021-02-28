import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
  color?: string;
}
const Button: React.FC<PropsButton> = ({
  children,
  color,
  type,
  ref,
  ...rest
}) => {
  return (
    <Container ref={ref} type={type} color={color} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
