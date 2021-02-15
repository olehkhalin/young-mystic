import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { CTABlock } from '@components/common/CTABlock';
import { PageTitle } from '@components/common/PageTitle';
import { BlogCard } from '@components/common/BlogCard';
import { Button } from '@ui/Button';
import { Pagination } from '@components/common/Pagination';

import s from '@styles/BlogCategory.module.sass';

import { BreadCrumbs } from '@ui/BreadCrumbs';
import { POSTS_BIG } from '../content';

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

const BlogCategory = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle
          title="Эфирные масла"
          description="Подзаголовок раздела на одну, две или три строки, рассказывающий о разделе"
          className={s.header}
        />
        <div className={s.blog}>
          {POSTS_BIG.map((post) => (
            <BlogCard
              isDescription
              key={post.id}
              className={s.post}
              image={post.image}
              link={post.link}
              category={post.category}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
        <div className={s.buttons}>
          <Button className={s.loadMore} theme="clean">Показать еще</Button>
          <Pagination
            parentPath="/blog-caregory"
            nextPage="/blog-caregory/6"
            previousPage="/blog-caregory/4"
            countOfPages={15}
            currentPage={5}
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

export default BlogCategory;
