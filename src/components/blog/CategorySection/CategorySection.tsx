import React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import { BlogCard } from '@components/common/BlogCard';
import ArrowRight from '@public/svg/ArrowRight.svg';

import s from './CategorySection.module.sass';

type PostsProps = {
  id: number
  image: string
  link: string
  date: string
  title: string
  category: {
    label: string
    link: string
  }
};

type CategorySectionProps = {
  posts: PostsProps[]
  category: {
    label: string
    link: string
  }
  className?: string
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  posts,
  category,
  className,
}) => (
  <Container className={cx(s.root, className)}>
    <Row>
      <h2 className={s.header}>{category.label}</h2>
      {posts.map((post) => (
        <BlogCard
          className={s.post}
          theme="small"
          key={post.id}
          image={post.image}
          link={post.link}
          category={post.category}
          date={post.date}
          title={post.title}
        />
      ))}
      <Button
        theme="clean"
        className={s.button}
      >
        Смотреть еще
        <ArrowRight className={s.icon} />
      </Button>
    </Row>
  </Container>
);
