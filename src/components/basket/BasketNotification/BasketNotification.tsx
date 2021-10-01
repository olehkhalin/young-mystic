import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { prettyPrice } from '@utils/helpers';
import { Toastify } from '@ui/Toastify';
import { Button } from '@ui/Button';

import s from './BasketNotification.module.sass';

type BasketNotificationProps = {
  image: string
  title: string
  firm?: string
  capacity?: number
  price: number
  closeToast?: () => void
  className?: string
};

export const BasketNotification: React.FC<BasketNotificationProps> = ({
  image,
  title,
  firm,
  capacity,
  price,
  closeToast,
  className,
}) => (
  <Toastify
    closeToast={closeToast}
  >
    <div className={cx(s.root, className)}>
      <h4 className={s.mainHeader}>
        Товар добавлен в корзину
      </h4>
      <div className={s.top}>
        <div className={s.image}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={s.content}>
          <p className={s.header}>
            {title}
            {' '}
            {firm && `(${firm}),`}
            {capacity && ` ${capacity} ml`}
          </p>
          <p className={s.price}>
            {prettyPrice(price)}
          </p>
        </div>
      </div>
      <div className={s.buttons}>
        <Button
          href="/basket"
          className={s.button}
        >
          Посмотреть корзину
        </Button>
        <Button
          theme="clean"
          className={s.button}
          onClick={closeToast}
        >
          Продолжить покупки
        </Button>
      </div>
    </div>
  </Toastify>
);
