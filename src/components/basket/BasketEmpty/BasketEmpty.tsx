import React from 'react';
import cx from 'classnames';

import { Button } from '@ui/Button';
import EmptyIcon from '@public/svg/EmptyBasket.svg';

import s from './BasketEmpty.module.sass';

type BasketEmptyProps = {
  className?: string
};

export const BasketEmpty: React.FC<BasketEmptyProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)}>
    <div className={s.content}>
      <EmptyIcon className={s.icon} />
      <h1 className={s.header}>Здесь пока пусто</h1>
      <p className={s.description}>
        Вы еще ничего не добавили в корзину. Нажмите кнопку ниже
        и начните шоппинг прямо сейчас!
      </p>
    </div>
    <Button
      href="/products"
      className={s.button}
    >
      Перейти в магазин
    </Button>
  </div>
);
