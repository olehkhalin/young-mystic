import * as React from 'react';
import cx from 'classnames';

import s from './Separator.module.sass';

type SeparatorProps = {
  theme?: keyof typeof themeClass
  className?: string
};

const themeClass = {
  primary: s.primary,
  dark: s.dark,
};

export const Separator: React.FC<SeparatorProps> = ({
  theme = 'primary',
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  return (
    <div className={compoundClassName} />
  );
};
