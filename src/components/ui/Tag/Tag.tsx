import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

import s from './Tag.module.sass';

type TagProps = {
  theme?: keyof typeof themeClass
  className?: string
} & (
  Omit<React.HTMLProps<HTMLSpanElement>, 'href'>
  | LinkProps
);

const themeClass = {
  primary: s.primary,
  secondary: s.secondary,
  dark: s.dark,
  smallPrimary: s.smallPrimary,
  smallSecondary: s.smallSecondary,
};

export const Tag: React.FC<TagProps> = ({
  theme = 'primary',
  className,
  children,
  ...props
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  if ('href' in props) {
    return (
      <Link
        {...props}
      >
        <a className={compoundClassName}>{children}</a>
      </Link>
    );
  }

  return (
    <span
      className={compoundClassName}
    >
      {children}
    </span>
  );
};
