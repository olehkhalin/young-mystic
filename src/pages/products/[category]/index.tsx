import React from 'react';
import { useRouter } from 'next/router';

import { useCategoryInfoQuery } from '@graphql';
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

const ProductsCategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  if (!category) {
    return null;
  }

  const { data, loading, error } = useCategoryInfoQuery({
    variables: {
      slug: category as string,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  if (!data || !data.category) {
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
            first={12}
            categorySlug={category as string}
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
};

export default ProductsCategoryPage;
