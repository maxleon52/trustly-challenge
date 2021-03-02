import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import avatar from '../../../assets/avatar.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container buttonVisible={location.pathname}>
      <div>
        <Link to={location.pathname === '/checkout' ? '/' : '/checkout'}>
          <button type="button">
            <FiArrowLeft size={20} />
            Back
          </button>
        </Link>

        <img src={avatar} alt="avatar" />
      </div>
    </Container>
  );
};

export default Header;
