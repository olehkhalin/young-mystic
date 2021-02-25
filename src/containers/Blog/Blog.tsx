import React from 'react';
import cx from 'classnames';
import { useBlogListQuery } from '@graphql';

import { BlogCard } from '@components/common/BlogCard';

import s from './BLOG.module.sass';
import { POSTS } from '../../content';

type ProductsProps = {
  className?: string
  categorySlug?: string
  isPagination?: boolean
};

export const Blog: React.FC<ProductsProps> = ({
  className,
  categorySlug,
}) => {
  const {
    data, loading, error,
  } = useBlogListQuery({
    variables: {
      category: categorySlug,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  if (!data) {
    return <>404</>; // TODO: 404 page render
  }

  return (
    <>
      <div className={cx(s.root, className)}>
        {POSTS.map((post, index) => (
          <BlogCard
            className={s.post}
            theme="small"
            key={post.id}
            image={post.image}
            link={post.link}
            category={post.category}
            date={post.date}
            title={post.title}
            description={post.description}
            isFullWidth={index === 2}
          />
        ))}
      </div>
    </>
  );
};
