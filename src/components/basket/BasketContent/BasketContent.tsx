import React from 'react';
import { useTranslation } from 'next-i18next';
import cx from 'classnames';

import { CartItems } from '@containers/Cart/CartItems';
import { CartCheckout } from '@containers/Cart/CartCheckout';

import s from './BasketContent.module.sass';

type BasketContentProps = {
  onCheckout: () => void
  className?: string
};

export const BasketContent: React.FC<BasketContentProps> = ({
  onCheckout,
  className,
}) => {
  const { t } = useTranslation(['basket']);

  return (
    <div className={cx(s.root, className)}>
      <div className={s.content}>
        <CartItems />
        <div className={s.guaranty}>
          <h2 className={s.header}>Наша гарантия</h2>
          <p className={s.description}>
            {
              t('basket:Если по какой-то причине вам не понравится ваш заказ, просто верните' +
                ' неиспользованный товар нам и мы будем рады помочь вам его обменять или вернём' +
                ' деньги.')
            }
          </p>
        </div>
      </div>
      <CartCheckout
        onCheckout={onCheckout}
        className={s.checkout}
        classNameBottom={s.bottom}
      />
    </div>
  );
};
