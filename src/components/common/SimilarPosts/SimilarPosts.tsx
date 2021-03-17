import React from 'react';
import cx from 'classnames';

import { BlogCard } from '@components/common/BlogCard';

import s from './SimilarPosts.module.sass';

type PostProps = {
  id: number
  image: string
  title: string
  description: string
  link: string
  category: {
    link: string
    label: string
  }
  date: string
};

type SimilarPostsProps = {
  posts: PostProps[]
  className?: string
};

export const SimilarPosts: React.FC<SimilarPostsProps> = ({
  posts,
  className,
}) => (
  <aside className={cx(s.root, className)}>
    <h2 className={s.header}>Вам может быть интересно</h2>
    <div className={s.blog}>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          className={s.post}
          theme="small"
          image={post.image}
          link={post.link}
          category={post.category}
          date={post.date}
          title={post.title}
          description={post.description}
          isSection
        />
      ))}
    </div>
  </aside>
);
