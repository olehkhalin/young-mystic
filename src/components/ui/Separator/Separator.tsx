import * as React from 'react';
import cx from 'classnames';

import s from './Separator.module.sass';

type SeparatorProps = {
  className?: string
};

export const Separator: React.FC<SeparatorProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)} />
);
