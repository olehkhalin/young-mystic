import React, {
  ReactNode, useContext, useEffect, useState,
} from 'react';
import { UnmountClosed } from 'react-collapse';
import cx from 'classnames';

import { CursorContext, CursorTypes } from '@components/common/CursorProvider';
import ChewronDown from '@public/svg/ChewronDown.svg';

import s from './CustomCollapse.module.sass';

type CustomCollapseProps = {
  theme?: keyof typeof themeClass
  title: string | ReactNode
  className?: string
  buttonClassName?: string
  isOpenDesktop?: boolean
};

const themeClass = {
  primary: s.primary,
  secondary: s.secondary,
  dark: s.dark,
  menu: s.menu,
};

const debounce = (fn: (...args: any[]) => void, ms: number) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      // @ts-ignore
      fn.apply(this, arguments);
    }, ms);
  };
};

export const CustomCollapse: React.FC<CustomCollapseProps> = ({
  theme = 'primary',
  title,
  className,
  buttonClassName,
  isOpenDesktop,
  children,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const { toggleCursorType } = useContext(CursorContext);

  useEffect(() => {
    if (isOpenDesktop && window.innerWidth >= 768) {
      setIsDesktop(true);
    }

    // prevents flashing
    const debouncedHandleResize = debounce(() => {
      if (isOpenDesktop) {
        if (window.innerWidth >= 768) {
          setIsDesktop(true);
        } else {
          setIsDesktop(false);
        }
      }
    }, 1000);
    debouncedHandleResize();

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <div className={compoundClassName}>
      <button
        type="button"
        onClick={() => !isDesktop && setIsOpen(!isOpen)}
        className={cx(s.title, { [s.active]: isOpen }, buttonClassName)}
        onMouseEnter={(e) => toggleCursorType(e.target as HTMLElement, CursorTypes.discover)}
        onMouseLeave={(e) => toggleCursorType(e.target as HTMLElement, CursorTypes.default)}
      >
        {title}
        {!isDesktop && <ChewronDown className={cx(s.icon, { [s.active]: isOpen })} />}
      </button>
      <UnmountClosed isOpened={isDesktop ? true : isOpen}>
        {children}
      </UnmountClosed>
    </div>
  );
};
