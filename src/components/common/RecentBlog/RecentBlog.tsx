import React from 'react';

import { BlogCard } from '@components/common/BlogCard';

import s from './RecentBlog.module.sass';

type PostProps = {
  id: number
  link: string
  image: string
  category: {
    link: string
    label: string
  }
  title: string
  description: string
  date: string
};

type RecentBlogProps = {
  posts: PostProps[]
};

export const RecentBlog: React.FC<RecentBlogProps> = ({
  posts,
}) => (
  <div className={s.root}>
    <h2 className={s.header}>Вам может быть интересно</h2>
    <div className={s.blog}>
      {posts.map((post, index) => (
        <BlogCard
          className={s.blogCard}
          theme="small"
          isFullWidth={index === 2}
          key={post.id}
          image={post.image}
          link={post.link}
          category={post.category}
          date={post.date}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  </div>
);
