import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { cartItemsVar } from '@cache';
import { useCartItemsListQuery } from '@graphql';

import { BasketCard } from '@components/basket/BasketCard';

import s from './CartItems.module.sass';

type CartItemsProps = {
  className?: string
};

export const CartItems: React.FC<CartItemsProps> = ({
  className,
}) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const slugs = cartItems.map((item) => item.slug);

  const { data, loading, error } = useCartItemsListQuery({
    variables: {
      slugs,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  const onAmountChange = (value: number, slug: string) => {
    if (slug && value >= 1 && value <= 100) {
      const newCartItems = [...cartItems];
      const necessaryElement = newCartItems.find((item) => item.slug === slug);
      if (necessaryElement) {
        necessaryElement.quantity = value;
      }
      cartItemsVar(newCartItems);
      localStorage.setItem('CART', JSON.stringify(newCartItems));
    }
  };

  const onRequestDelete = (slug: string) => {
    if (slug) {
      const newCartItems = cartItems.filter((item) => item.slug !== slug);
      cartItemsVar(newCartItems);
      localStorage.setItem('CART', JSON.stringify(newCartItems));
    }
  };

  return (
    <div className={className}>
      {data?.products?.data.map((item) => (
        <BasketCard
          className={s.card}
          key={item.slug}
          image={item.image}
          minValue={1}
          maxValue={100}
          amount={
            cartItems.find((itemLocal) => itemLocal.slug === item.slug)?.quantity
            || 1
          }
          title={item.title}
          firm={item.firm || undefined}
          capacity={item.capacity || undefined}
          price={item.price}
          onAmountChange={(val) => onAmountChange(val, item.slug)}
          onRequestDelete={() => onRequestDelete(item.slug)}
        />
      ))}
    </div>
  );
};
