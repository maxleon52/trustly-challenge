import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Colors } from '../../styles/Colors';

import { Container, Button, Options } from './styles';

interface CardProps {
  description: string;
  price: string;
  thumbnailURL: string;
}

const Card: React.FC<CardProps> = ({
  description,
  price,
  thumbnailURL,
}: CardProps) => {
  return (
    <Container>
      <img src={thumbnailURL} alt="shoe" />

      <div>
        <h4>{description}</h4>

        <Options>
          <p>Size</p>
          <div>
            <p>41</p>
            <FiChevronDown color={Colors.greenDark} />
          </div>
          <p>Quantity</p>
          <div>
            <p>1</p>
            <FiChevronDown />
          </div>
        </Options>

        <strong>$ {price}</strong>

        <Link to="/checkout">
          <Button type="button">Add to cart</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Card;
