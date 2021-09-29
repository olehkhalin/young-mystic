import React from 'react';
import cx from 'classnames';

import { Blog } from '@containers/Blog/Blog';

import s from './SimilarPosts.module.sass';

type SimilarPostsProps = {
  category?: string | null
  currentSlug?: string
  className?: string
};

export const SimilarPosts: React.FC<SimilarPostsProps> = ({
  category,
  currentSlug,
  className,
}) => (
  <aside className={cx(s.root, className)}>
    <h2 className={s.header}>Вам может быть интересно</h2>
    <Blog
      category={category}
      ommitSlug={currentSlug}
      className={s.blog}
      isSection
    />
  </aside>
);
