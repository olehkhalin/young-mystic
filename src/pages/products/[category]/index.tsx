import React from 'react';
import { useRouter } from 'next/router';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useCategoryInfoQuery } from '@graphql';
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

const ProductsCategoryPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;
  if (!category) {
    return null;
  }

  const { data, loading, error } = useCategoryInfoQuery({
    variables: {
      slug: category as string,
    },
    context: {
      ghost: false,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  if (!data?.category) {
    return <>404</>; // TODO: Set 404 page render
  }
  const { title, description, image } = data.category;

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
      title,
    },
  ];

  return (
    <BaseLayout>
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <PageTitle
            image={image}
            title={title}
            description={description}
            className={s.title}
          />
          <Filters className={s.filter} />
          <Separator className={s.separator} />
          <Products
            className={s.products}
            categorySlug={category as string}
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

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'products']),
//   },
// });

export default ProductsCategoryPage;
