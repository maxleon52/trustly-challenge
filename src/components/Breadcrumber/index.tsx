import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, StepOne, StepTwo, StepThree } from './styles';

const Breadcrumber: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <StepOne />
      <StepTwo
        isStep={
          !!(
            location.pathname === '/checkout' || location.pathname === '/review'
          )
        }
      />
      <StepThree isStep={window.isConfirm === true && true} />
    </Container>
  );
};

export default Breadcrumber;
