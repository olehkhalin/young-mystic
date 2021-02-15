import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { PlusMinusInput } from '@ui/PlusMinusInput';
import { Button } from '@ui/Button';

import s from './BasketCard.module.sass';

type BasketCardProps = {
  image: string
  minValue: number
  maxValue: number
  amount: number
  title: string
  price: number
  onAmountChange: (val: number) => void
  className?: string
};

export const BasketCard: React.FC<BasketCardProps> = ({
  image,
  minValue,
  maxValue,
  amount,
  title,
  price,
  onAmountChange,
  className,
}) => (
  <article className={cx(s.root, className)}>
    <div className={s.top}>
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
        <h3 className={s.header}>{title}</h3>
        <p className={s.price}>
          {price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 2 })}
          ₴
        </p>
      </header>
    </div>
    <footer className={s.bottom}>
      <PlusMinusInput
        minValue={minValue}
        maxValue={maxValue}
        onValueChange={(value) => onAmountChange(value)}
        value={amount}
      />
      <Button
        theme="clean"
        className={s.button}
      >
        Удалить
      </Button>
    </footer>
  </article>
);
