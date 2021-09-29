import React from 'react';
import { LinkProps } from 'next/link';
import cx from 'classnames';
import { motion } from 'framer-motion';

import { CursorWrapper } from '@components/common/CursorWrapper';
import { CursorTypes } from '@components/common/CursorProvider';

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
      <CursorWrapper
        href={props.href as string}
        type={CursorTypes.button}
      >
        <motion.span
          className={compoundClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.span>
      </CursorWrapper>
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
