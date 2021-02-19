import React, { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';

import { cartItemsVar } from '@cache';

import { Button } from '@ui/Button';

type AddToCartButtonProps = {
  slug: string
  className?: string
};

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  slug,
  className,
}) => {
  const [isInCart, setIsInCart] = useState(false);

  const cartItems = useReactiveVar(cartItemsVar);
  useEffect(() => {
    setIsInCart(slug ? cartItems.some((item) => item.slug === slug) : false);
  }, [cartItems]);

  const onAddToCart = () => {
    if (slug) {
      const newCartItems = isInCart
        ? cartItems.filter((item) => item.slug !== slug)
        : [...cartItems, { slug, quantity: 1 }];

      cartItemsVar(newCartItems);
      localStorage.setItem('CART', JSON.stringify(newCartItems));
    }
  };

  return (
    <Button
      theme={isInCart ? 'secondary' : 'primary'}
      className={className}
      onClick={onAddToCart}
    >
      {isInCart ? 'Убрать из корзины' : 'В корзину'}
    </Button>
  );
};
