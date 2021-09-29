import React from 'react';
import cx from 'classnames';
import { useReactiveVar } from '@apollo/client';

import { cartItemsVar } from '@cache';
import { useCartItemsListQuery } from '@graphql';
import { CheckoutCard } from '@components/basket/CheckoutCard';

import { prettyPrice } from '@functions';
import { Button } from '@ui/Button';
import s from './CartCheckout.module.sass';

type CartCheckoutProps = {
  className?: string
  classNameBottom?: string
};

export const CartCheckout: React.FC<CartCheckoutProps> = ({
  className,
  classNameBottom,
}) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const slugs = cartItems.map((item) => item.slug);

  const { data, loading, error } = useCartItemsListQuery({
    variables: {
      slugs,
    },
    context: {
      ghost: false,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  const sum = data?.products?.data.reduce((prevSum, item) => prevSum
      + item.price * (
        cartItems.find((itemLocal) => itemLocal.slug === item.slug)?.quantity || 1
      ), 0) || 0;

  return (
    <>
      <div className={cx(s.root, className)}>
        <div className={s.inner}>
          <h1 className={s.header}>Ваша корзина</h1>
          {data?.products?.data.map((item) => (
            <CheckoutCard
              key={item.slug}
              className={s.card}
              title={item.title}
              amount={
              cartItems.find((itemLocal) => itemLocal.slug === item.slug)?.quantity
              || 1
            }
              price={item.price}
            />
          ))}
        </div>
        <div className={cx(s.bottom, s.desktop, classNameBottom)}>
          <div className={s.sum}>
            <h3 className={s.sumHeader}>Общая стоимость</h3>
            <span className={s.sumAmount}>{prettyPrice(sum)}</span>
          </div>
          <Button
            href="/products"
            className={s.button}
          >
            Перейти к оформлению
          </Button>
        </div>
      </div>
      <div className={cx(s.bottom, s.mobile, classNameBottom)}>
        <div className={s.sum}>
          <h3 className={s.sumHeader}>Общая стоимость</h3>
          <span className={s.sumAmount}>{prettyPrice(sum)}</span>
        </div>
        <Button
          href="/products"
          className={s.button}
        >
          Перейти к оформлению
        </Button>
      </div>
    </>
  );
};
