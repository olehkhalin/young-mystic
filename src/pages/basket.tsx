import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { useReactiveVar } from '@apollo/client';
import { cartItemsVar } from '@cache';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { BasketEmpty } from '@components/basket/BasketEmpty';
import { BasketContent } from '@components/basket/BasketContent';

import s from '@styles/Basket.module.sass';

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

const Blog = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useReactiveVar(cartItemsVar);
  const isNotEmpty = isClient ? cartItems.length !== 0 : false;

  return (
    <BaseLayout
      theme="light"
      className={cx(s.wrapper, { [s.notEmpty]: isNotEmpty })}
    >
      <Container>
        <Row>
          <BreadCrumbs
            navLinks={navLinks}
            // className={s.breadCrumbs}
          />
          {isNotEmpty ? <BasketContent /> : <BasketEmpty /> }
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Blog;
