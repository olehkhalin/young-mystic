import React from 'react';

import { Blog } from '@containers/Blog/Blog';

import s from './RecentBlog.module.sass';

export const RecentBlog: React.FC = () => (
  <div className={s.root}>
    <h2 className={s.header}>Вам может быть интересно</h2>
    <Blog className={s.blog} />
  </div>
);
