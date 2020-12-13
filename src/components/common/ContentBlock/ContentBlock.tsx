import * as React from 'react';
import cx from 'classnames';

import s from './ContentBlock.module.sass';

type ContentBlockProps = {
  className?: string
};

export const ContentBlock: React.FC<ContentBlockProps> = ({
  children,
  className,
}) => (
  <div className={cx(s.root, className)}>
    {children}
  </div>
);
