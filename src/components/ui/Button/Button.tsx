/* eslint-disable react/button-has-type */
import React from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';
import {
  motion,
} from 'framer-motion';

import s from './Button.module.sass';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  theme?: keyof typeof themeClass
  external?: boolean
  className?: string
} & (
  React.HTMLProps<HTMLButtonElement>
  | LinkProps
  | React.HTMLProps<HTMLAnchorElement>
);

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
        <motion.a
          target="_blank"
          rel="noreferrer noopener"
          className={compoundClassName}
          {...(props as React.HTMLProps<HTMLAnchorElement>)}
          whileHover={theme !== 'clean' ? { scale: 1.05 } : {}}
          whileTap={theme !== 'clean' ? { scale: 0.95 } : {}}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link
        {...(props as LinkProps)}
        passHref
      >
        <motion.a
          className={compoundClassName}
          whileHover={theme !== 'clean' ? { scale: 1.05 } : {}}
          whileTap={theme !== 'clean' ? { scale: 0.95 } : {}}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      // @ts-ignore
      type={type}
      {...(props as React.HTMLProps<HTMLButtonElement>)}
      className={compoundClassName}
      whileHover={theme !== 'clean' ? { scale: 1.05 } : {}}
      whileTap={theme !== 'clean' ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};
