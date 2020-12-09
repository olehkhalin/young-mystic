import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

import s from './Button.module.sass';

type ButtonProps = {
  theme?: keyof typeof themeClass
  external?: boolean
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | LinkProps);

const themeClass = {
  primary: s.primary,
  secondary: s.secondary,
  clean: s.clean,
  dark: s.dark,
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  theme = 'primary',
  external = false,
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
    if (external) {
      return (
        <a
          target="_blank"
          rel="noreferrer noopener"
          className={compoundClassName}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        {...props}
        href={props.href}
        passHref
      >
        <a className={compoundClassName}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      {...props}
      className={compoundClassName}
    >
      {children}
    </button>
  );
};
