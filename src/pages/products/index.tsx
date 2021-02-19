import React from 'react';

import { Products } from '@containers/Products/Products';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { Separator } from '@ui/Separator';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';
import { Filters } from '@components/products/Filters';
import { Pagination } from '@components/common/Pagination';

import s from '@styles/Products.module.sass';

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Магазин',
  },
];

const ProductsPage = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} className={s.breadCrumbs} />
        <PageTitle
          title="Магазин"
          description="Подзаголовок раздела на одну, две или три строки, рассказывающий о разделе"
          className={s.title}
        />
        <Filters />
        <Separator className={s.separator} />
        <Products
          className={s.products}
          first={12}
        />
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
