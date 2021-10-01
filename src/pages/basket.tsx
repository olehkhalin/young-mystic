import React, { useEffect, useMemo, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cx from 'classnames';

import { useReactiveVar } from '@apollo/client';
import { cartItemsVar } from '@cache';
import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { BasketEmpty } from '@components/basket/BasketEmpty';
import { BasketContent } from '@components/basket/BasketContent';
import { BasketCheckout } from '@components/basket/BasketCheckout';

import s from '@styles/Basket.module.sass';

enum CheckoutStage {
  Empty,
  Basket,
  Checkout,
}

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Магазин',
    link: '/products',
  },
  {
    title: 'Корзина',
  },
];

const Basket: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useReactiveVar(cartItemsVar);
  const isNotEmpty = isClient ? cartItems.length !== 0 : false;

  const [checkoutState, setCheckoutState] = useState(CheckoutStage.Basket);

  useEffect(() => {
    if (!isNotEmpty) {
      setCheckoutState(CheckoutStage.Empty);
    } else {
      setCheckoutState(CheckoutStage.Basket);
    }
  }, [isNotEmpty]);

  const content = useMemo(() => {
    if (checkoutState === CheckoutStage.Empty) {
      return <BasketEmpty className={s.empty} />;
    }
    // if (checkoutState === CheckoutStage.Checkout) {
    return <BasketCheckout/>;
    // }
    // return (
    //   <BasketContent
    //     onCheckout={() => setCheckoutState(CheckoutStage.Checkout)}
    //   />
    // );
  }, [checkoutState]);

  return (
    <BaseLayout
      theme="light"
      className={cx(s.wrapper, { [s.notEmpty]: checkoutState !== CheckoutStage.Empty })}
    >
      <Container>
        <Row className={s.row}>
          <BreadCrumbs
            navLinks={navLinks}
            className={s.breadCrumbs}
          />
          {content}
        </Row>
      </Container>
    </BaseLayout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'basket']),
  },
});

export default Basket;
