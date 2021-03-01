import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface ProductForCheckoutProps {
  description: string;
  color: string;
  price: string;
  maxresURL: string;
}

interface ContextProps {
  productForCheckout: ProductForCheckoutProps;
  handleGetProduct: (
    description: string,
    maxresURL: string,
    color: string,
    price: string,
  ) => void;
}

export const CartContext = createContext({} as ContextProps);

export function CartProvider({ children }: Props) {
  const [dataProduct, setDataProduct] = useState<ProductForCheckoutProps>({
    description: '',
    maxresURL: '',
    color: '',
    price: '',
  });

  const productForCheckout = dataProduct;

  localStorage.setItem('@Trustly:product', JSON.stringify(productForCheckout));

  function handleGetProduct(
    description: string,
    maxresURL: string,
    color: string,
    price: string,
  ) {
    setDataProduct({ description, color, price, maxresURL });
  }

  return (
    <CartContext.Provider value={{ handleGetProduct, productForCheckout }}>
      {children}
    </CartContext.Provider>
  );
}
