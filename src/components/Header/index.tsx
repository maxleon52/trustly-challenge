import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';

import { Container, Separator } from './styles';

const translate: {
  [key: string]: string;
} = {
  '/products': 'Sneakers',
  '/checkout': 'Checkout',
  '/review': 'Review and Confirmation',
};

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <div>
        {location.pathname === '/products' ? (
          <Separator />
        ) : (
          <Link
            to={location.pathname === '/checkout' ? '/products' : '/ckeckout'}
          >
            <button type="button">
              <FiArrowLeft size={20} />
              voltar
            </button>
          </Link>
        )}

        <h1>{translate[location.pathname]}</h1>

        <img src={avatar} alt="avatar" />
      </div>
    </Container>
  );
};

export default Header;
