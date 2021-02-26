import React from 'react';
import cx from 'classnames';
import { useBlogCategoriesListQuery } from '@graphqlBlog';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { FirstScreen } from '@components/blog/FirstScreen';
import { CategorySection } from '@components/blog/CategorySection';
import { CTABlock } from '@components/common/CTABlock';

import s from '@styles/Blog.module.sass';

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Блог',
  },
];

const Blog = () => {
  const { data, loading, error } = useBlogCategoriesListQuery({
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
  const finalTags = data?.tags?.edges ? data?.tags?.edges.filter((tag) => tag?.node?.visibility !== 'internal') : [];
  if (!finalTags) {
    return <>404</>; // TODO: 404 page render
  }

  return (
    <BaseLayout>
      <Container>
        <Row>
          <BreadCrumbs navLinks={navLinks} className={s.breadCrumbs} />
        </Row>
      </Container>
      <FirstScreen tags={finalTags} />
      {finalTags.map((category, index) => category?.node && (
        <CategorySection
          key={category.node.id}
          className={cx(
            { [s.light]: index % 2 === 0 },
            { [s.dark]: index % 2 === 1 },
          )}
          category={{
            label: category.node.name,
            slug: category.node.slug,
          }}
        />
      ))}
      <Container theme="small">
        <Row>
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

export default Blog;
