import React from 'react';
import cx from 'classnames';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { FirstScreen } from '@components/blog/FirstScreen';
import { CategorySection } from '@components/blog/CategorySection';
import { CTABlock } from '@components/common/CTABlock';

import s from '@styles/Blog.module.sass';

import { POSTS, TAGS } from '../content';

const CATEGORIES = [
  {
    id: 0,
    title: 'Эфирные масла',
    link: '/blog-tag',
    posts: POSTS,
  },
  {
    id: 1,
    title: 'Красота',
    link: '/blog-tag',
    posts: POSTS,
  },
  {
    id: 2,
    title: 'Истории Гери Янга',
    link: '/blog-tag',
    posts: POSTS,
  },
  {
    id: 3,
    title: 'Здоровье',
    link: '/blog-tag',
    posts: POSTS,
  },
];

const Blog = () => (
  <BaseLayout>
    <FirstScreen tags={TAGS} />
    {CATEGORIES.map((category, index) => (
      <CategorySection
        key={category.id}
        className={cx(
          { [s.light]: index % 2 === 0 },
          { [s.dark]: index % 2 === 1 },
        )}
        posts={category.posts}
        category={{
          label: category.title,
          link: category.link,
        }}
      />
    ))}
    <Container>
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

export default Blog;
