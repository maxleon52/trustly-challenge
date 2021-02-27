import React, { useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';
import { Colors } from '../../styles/Colors';

import { Container, Button, Options } from './styles';

interface CardProps {
  description: string;
  color: string;
  price: string;
  thumbnailURL: string;
  maxresURL: string;
}

const Card: React.FC<CardProps> = ({
  description,
  color,
  price,
  thumbnailURL,
  maxresURL,
}: CardProps) => {
  const { handleGetProduct } = useContext(CartContext);

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
          <Button
            type="button"
            onClick={() =>
              handleGetProduct(description, maxresURL, color, price)
            }
          >
            Add to cart
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Card;
