import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';

import HeaderMobile from './HeaderMobile';

import { Container, Separator } from './styles';

const translate: {
  [key: string]: string;
} = {
  '/': 'Sneakers',
  '/checkout': 'Checkout',
};

const Header: React.FC = () => {
  const location = useLocation();

  const verify = Boolean(window.isConfirm);

  return (
    <>
      <HeaderMobile />
      <Container>
        <div>
          {location.pathname === '/' ? (
            <Separator />
          ) : (
            <Link to={location.pathname === '/checkout' ? '/' : '/checkout'}>
              <button type="button">
                <FiArrowLeft size={20} />
                Back
              </button>
            </Link>
          )}

          {verify === false ? (
            <h1>{translate[location.pathname]}</h1>
          ) : (
            <h1>Review and Confirmation</h1>
          )}

          <img src={avatar} alt="avatar" />
        </div>
      </Container>
    </>
  );
};

export default Header;
