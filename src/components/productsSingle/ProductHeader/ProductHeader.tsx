import React from 'react';
import cx from 'classnames';

import { prettyPrice } from '@functions';
import { AddToCartButton } from '@containers/Cart/AddToCartButton';
import { Button } from '@ui/Button';
import Discount from '@public/svg/Discount.svg';

import s from './ProductHeader.module.sass';

type ProductHeaderProps = {
  slug: string
  title: string
  image: string
  firm?: string | null
  capacity?: number | null
  price: number
  description: string
  className?: string
};

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  slug,
  title,
  image,
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
    <div className={s.buttons}>
      <AddToCartButton
        slug={slug}
        title={title}
        image={image}
        firm={firm || undefined}
        capacity={capacity || undefined}
        price={price}
        className={s.button}
      />
      <Button theme="secondary" className={s.buttonSale}>
        <Discount className={s.icon} />
        Купить со скидкой
      </Button>
    </div>
  </div>
);
