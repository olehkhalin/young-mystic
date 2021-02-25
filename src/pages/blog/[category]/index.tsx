import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';
import { BlogCard } from '@components/common/BlogCard';
import { Pagination } from '@components/common/Pagination';

import s from '@styles/BlogCategory.module.sass';

import { useRouter } from 'next/router';
import { useBlogCategoryInfoQuery } from '@graphqlBlog';
import { Blog } from '@containers/Blog/Blog';
import { POSTS_BIG } from '../../../content';

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
    title: 'Эфирные масла',
  },
];

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
          {/* <div className={s.buttons}> */}
          {/*  <Button className={s.loadMore} theme="clean">Показать еще</Button> */}
          {/*  <Pagination */}
          {/*    parentPath="/blog-caregory" */}
          {/*    nextPage="/blog-caregory/6" */}
          {/*    previousPage="/blog-caregory/4" */}
          {/*    countOfPages={15} */}
          {/*    currentPage={5} */}
          {/*  /> */}
          {/* </div> */}
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
