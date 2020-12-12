import React from 'react';
import cx from 'classnames';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { CTABlock } from '@components/common/CTABlock';

import s from '@styles/Products.module.sass';

import { PageTitle } from '@components/common/PageTitle';
import { Filters } from '@components/products/Filters';
import { Separator } from '@ui/Separator';
import { ProductCard } from '@components/common/ProductCard';
import { Button } from '@ui/Button';
import { Pagination } from '@components/common/Pagination';
import { PRODUCTS_BIG } from '../content';

const ProductsPage = () => (
  <BaseLayout>
    <Container>
      <Row>
        <PageTitle
          title="Магазин"
          description="Подзаголовок раздела на одну, две или три строки, рассказывающий о разделе"
          className={s.title}
        />
        <Filters className={s.filter} />
        <Separator />
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

export default ProductsPage;
