import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useReactiveVar } from '@apollo/client';

import { cartItemsVar } from '@cache';

import ShoppingCart from '@public/svg/ShoppingCart.svg';

import s from './CartIcon.module.sass';

type CartIconProps = {
  className?: string
};

export const CartIcon: React.FC<CartIconProps> = ({
  className,
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useReactiveVar(cartItemsVar);
  const isNotEmpty = isClient ? cartItems.length !== 0 : false;

  return (
    <a href="/basket" type="button" className={cx(s.cart, { [s.active]: isNotEmpty }, className)}>
      <ShoppingCart />
    </a>
  );
};
