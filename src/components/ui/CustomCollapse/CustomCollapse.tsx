import React, { useState } from 'react';
import { UnmountClosed } from 'react-collapse';
import cx from 'classnames';

import ChewronDown from '@public/svg/ChewronDown.svg';

import s from './CustomCollapse.module.sass';

type CustomCollapseProps = {
  theme?: keyof typeof themeClass
  title: string
  className?: string
};

const themeClass = {
  primary: s.primary,
  secondary: s.secondary,
  dark: s.dark,
  menu: s.menu,
};

export const CustomCollapse: React.FC<CustomCollapseProps> = ({
  theme = 'primary',
  title,
  className,
  children,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={compoundClassName}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cx(s.title, { [s.active]: isOpen })}
      >
        {title}
        <ChewronDown className={cx(s.icon, { [s.active]: isOpen })} />
      </button>
      <UnmountClosed className={s.container} isOpened={isOpen}>
        {children}
      </UnmountClosed>
    </div>
  );
};
