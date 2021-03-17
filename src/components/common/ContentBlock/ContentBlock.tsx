import React, { forwardRef, ReactNode } from 'react';
import cx from 'classnames';

import s from './ContentBlock.module.sass';

export type ContentBlockRef = HTMLDivElement;

type ContentBlockProps = {
  children: ReactNode
  className?: string
};

export const ContentBlock = forwardRef<ContentBlockRef, ContentBlockProps>(
  ({ children, className }, ref) => (
    <div
      className={cx(s.root, className)}
      ref={ref}
    >
      {children}
    </div>
  ),
);
