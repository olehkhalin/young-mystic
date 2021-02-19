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
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  const cartItems = useReactiveVar(cartItemsVar);
  useEffect(() => {
    setIsNotEmpty(cartItems.length !== 0);
  }, [cartItems]);

  return (
    <button type="button" className={cx(s.cart, { [s.active]: isNotEmpty }, className)}>
      <ShoppingCart />
    </button>
  );
};
