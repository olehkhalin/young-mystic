import React from 'react';
import cx from 'classnames';

import { Button } from '@ui/Button';
import Discount from '@public/svg/Discount.svg';
import { prettyPrice } from '../../../functions';

import s from './ProductHeader.module.sass';

type ProductHeaderProps = {
  title: string
  firm?: string
  capacity?: number
  price: number
  description: string
  className?: string
};

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  title,
  firm,
  capacity,
  price,
  description,
  className,
}) => (
  <div className={cx(s.root, className)}>
    <h1 className={s.header}>
      {title}
      {firm && ` (${firm})`}
      {capacity && ` ${capacity}ml`}
    </h1>
    <p className={s.price}>{prettyPrice(price)}</p>
    <p className={s.description}>{description}</p>
    <Button className={s.button}>В корзину</Button>
    <Button theme="secondary" className={s.buttonSale}>
      <Discount className={s.icon} />
      Купить со скидкой
    </Button>
  </div>
);
