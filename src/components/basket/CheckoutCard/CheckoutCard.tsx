import React from 'react';
import cx from 'classnames';

import { prettyPrice } from '@utils/helpers';

import s from './CheckoutCard.module.sass';

type CheckoutCardProps = {
  amount: number
  title: string
  price: number
  className?: string
};

export const CheckoutCard: React.FC<CheckoutCardProps> = ({
  amount,
  title,
  price,
  className,
}) => (
  <div className={cx(s.root, className)}>
    <h3 className={s.title}>
      {title}
      &nbsp;(
      {amount}
      )
    </h3>
    <p className={s.price}>
      {prettyPrice(amount * price)}
    </p>
  </div>
);
