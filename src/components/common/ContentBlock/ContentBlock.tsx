import React, { forwardRef } from 'react';
import cx from 'classnames';

import s from './ContentBlock.module.sass';

export type ContentBlockRef = HTMLDivElement;

type ContentBlockProps = {
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
