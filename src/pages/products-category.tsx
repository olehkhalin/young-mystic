import React from 'react';
import cx from 'classnames';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { Separator } from '@ui/Separator';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';
import { Filters } from '@components/products/Filters';
import { ProductCard } from '@components/common/ProductCard';
import { Pagination } from '@components/common/Pagination';

import s from '@styles/Products.module.sass';

import { PRODUCTS_BIG } from '../content';

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
    title: 'Эфирные масла',
  },
];

const ProductsCategoryPage = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle
          image="/images/MainFirst.jpg"
          title="Эфирные масла"
          description="Наши эфирные масла бережно собраны на фермах, и подарят вам все свои самые лучшие качества"
          className={s.title}
        />
        <Filters className={s.filter} />
        <Separator className={s.separator} />
        <div className={cx(s.products)}>
          {PRODUCTS_BIG.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              link={product.link}
              title={product.title}
              price={product.price}
              isSale={product.isSale}
              isNew={product.isNew}
            />
          ))}
        </div>
        <div className={s.buttons}>
          <Button className={s.loadMore} theme="clean">Показать еще</Button>
          <Pagination
            parentPath="/blog-caregory"
            nextPage="/blog-caregory/3"
            previousPage="/blog-caregory/1"
            countOfPages={15}
            currentPage={2}
          />
        </div>
        <CTABlock
          className={s.blockCta}
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            link: '/',
            label: 'Присоединиться',
          }}
        />
      </Row>
    </Container>
  </BaseLayout>
);

export default ProductsCategoryPage;
