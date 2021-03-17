import React from 'react';
import { useRouter } from 'next/router';
import { useBlogCategoryInfoQuery } from '@graphqlBlog';

import { Blog } from '@containers/Blog/Blog';
import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';

import s from '@styles/BlogCategory.module.sass';

const Index = () => {
  const router = useRouter();
  const { category } = router.query;
  if (!category) {
    return null;
  }

  const { data, loading, error } = useBlogCategoryInfoQuery({
    variables: {
      slug: category as string,
    },
    context: {
      ghost: true,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  if (!data?.tag) {
    return <>404</>; // TODO: Set 404 page render
  }
  const {
    slug, name: title, description, featureImage,
  } = data?.tag;
  if (!slug || !title) {
    return <>404</>; // TODO: Set 404 page render
  }

  const navLinks = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Блог',
      link: '/blog',
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
            title={title}
            description={description}
            image={featureImage}
            className={s.header}
          />
          <Blog category={slug} className={s.blog} isPagination />
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

export default Index;
