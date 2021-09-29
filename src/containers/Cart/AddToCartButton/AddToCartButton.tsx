import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useReactiveVar } from '@apollo/client';

import { cartItemsVar } from '@cache';
import { Button } from '@ui/Button';
import { BasketNotification } from '@components/basket/BasketNotification';

type AddToCartButtonProps = {
  slug: string
  image: string
  title: string
  firm?: string
  capacity?: number
  price: number
  className?: string
};

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  slug,
  image,
  title,
  firm,
  capacity,
  price,
  className,
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const notify = () => toast(
    <BasketNotification
      title={title}
      image={image}
      firm={firm || undefined}
      capacity={capacity || undefined}
      price={price}
    />,
  );

  const cartItems = useReactiveVar(cartItemsVar);
  const isInCart = isClient && slug ? cartItems.some((item) => item.slug === slug) : false;

  const onAddToCart = () => {
    if (slug) {
      const newCartItems = isInCart
        ? cartItems.filter((item) => item.slug !== slug)
        : [...cartItems, { slug, quantity: 1 }];

      cartItemsVar(newCartItems);
      localStorage.setItem('CART', JSON.stringify(newCartItems));
      if (!isInCart) {
        notify();
      }
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
