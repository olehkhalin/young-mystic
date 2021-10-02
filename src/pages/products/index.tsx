import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Products } from '@containers/Products/Products';
import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';
import { Filters } from '@components/products/Filters';

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

const ProductsPage: React.FC = () => {
  const { t } = useTranslation(['products']);

  return (
    <BaseLayout>
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} className={s.breadCrumbs} />
          <PageTitle
            title="Магазин"
            description={t('products:Подзаголовок раздела на одну, две или три строки, рассказывающий о разделе')}
            className={s.title}
          />
          <Filters />
          <Separator className={s.separator} />
          <Products
            className={s.products}
            isPagination
          />
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
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'products'])),
  },
});

export default ProductsPage;
