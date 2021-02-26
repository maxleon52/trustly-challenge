import React from 'react';
import { useLocation } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';

import { Container, Separator } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <div>
        {location.pathname === '/products' ? (
          <Separator />
        ) : (
          <button type="button">
            <FiArrowLeft size={20} />
            voltar
          </button>
        )}

        <h1>Sneakers</h1>

        <img src={avatar} alt="avatar" />
      </div>
    </Container>
  );
};

export default Header;
