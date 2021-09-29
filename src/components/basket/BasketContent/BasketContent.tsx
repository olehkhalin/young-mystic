import React from 'react';
import cx from 'classnames';

import { CartItems } from '@containers/Cart/CartItems';
import { CartCheckout } from '@containers/Cart/CartCheckout';

import s from './BasketContent.module.sass';

type BasketContentProps = {
  className?: string
};

export const BasketContent: React.FC<BasketContentProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)}>
    <div className={s.content}>
      <CartItems />
      <div className={s.guaranty}>
        <h2 className={s.header}>Наша гарантия</h2>
        <p className={s.description}>
          Если по какой-то причине вам не понравится ваш заказ, просто верните неиспользованный товар
          нам и мы будем рады помочь вам его обменять или вернём деньги.
        </p>
      </div>
    </div>
    <CartCheckout
      className={s.checkout}
      classNameBottom={s.bottom}
    />
  </div>
);
