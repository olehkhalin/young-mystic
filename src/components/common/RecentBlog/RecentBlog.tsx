import * as React from 'react';

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
  date: string
};

type RecentBlogProps = {
  posts: PostProps[]
};

export const RecentBlog: React.FC<RecentBlogProps> = ({
  posts,
}) => (
  <>
    <h2 className={s.header}>Вам может быть интересно</h2>
    {posts.map((post) => (
      <BlogCard
        className={s.blogCard}
        theme="small"
        key={post.id}
        image={post.image}
        link={post.link}
        category={post.category}
        date={post.date}
        title={post.title}
      />
    ))}
  </>
);
