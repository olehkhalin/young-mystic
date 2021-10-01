import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { prettyPrice } from '@utils/helpers';
import { PlusMinusInput } from '@ui/PlusMinusInput';
import { Button } from '@ui/Button';

import s from './BasketCard.module.sass';

type BasketCardProps = {
  image: string
  minValue: number
  maxValue: number
  amount: number
  title: string
  firm?: string
  capacity?: number
  price: number
  onAmountChange: (val: number) => void
  onRequestDelete: () => void
  className?: string
};

export const BasketCard: React.FC<BasketCardProps> = ({
  image,
  minValue,
  maxValue,
  amount,
  title,
  firm,
  capacity,
  price,
  onAmountChange,
  onRequestDelete,
  className,
}) => (
  <article className={cx(s.root, className)}>
    {/*<div className={s.top}>*/}
      <div className={s.image}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <header className={s.content}>
        <div className={s.headerWrapper}>
          <h3 className={s.header}>
            {title}
            {firm ? ` (${firm}),` : ','}
          </h3>
          {capacity && (
            <p className={s.capacity}>
              {capacity}
              {' '}
              ml
            </p>
          )}
        </div>
        <p className={s.price}>
          {prettyPrice(price)}
        </p>
      </header>
    {/*</div>*/}
    <footer className={s.bottom}>
      <PlusMinusInput
        minValue={minValue}
        maxValue={maxValue}
        onValueChange={(value) => onAmountChange(value)}
        value={amount}
        className={s.plusMinus}
      />
      <Button
        theme="clean"
        className={s.button}
        onClick={onRequestDelete}
      >
        Удалить
      </Button>
    </footer>
  </article>
);
