import React, { useContext } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { CursorContext, CursorTypes } from '@components/common/CursorProvider';

import s from './CursorWrapper.module.sass';

type CursorWrapperProps = {
  href: string
  external?: boolean
  type?: CursorTypes
  className?: string
  onClick?: () => void
};

export const CursorWrapper: React.FC<CursorWrapperProps> = ({
  href,
  external = false,
  type = CursorTypes.pointer,
  className,
  onClick,
  children,
}) => {
  const compoundClassname = cx(
    s.root,
    {
      [s.pointer]: (
        type === CursorTypes.pointer
        || type === CursorTypes.pointerLight
        || type === CursorTypes.pointerSmall
      ),
    },
    { [s.pointerLight]: type === CursorTypes.pointerLight },
    { [s.pointerSmall]: type === CursorTypes.pointerSmall },
    className,
  );

  const { toggleCursorType } = useContext(CursorContext);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer nofollow"
        className={compoundClassname}
        onMouseEnter={(e) => toggleCursorType(e.target as HTMLElement, type)}
        onMouseLeave={(e) => toggleCursorType(e.target as HTMLElement, CursorTypes.default)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
    >
      <a
        className={compoundClassname}
        onMouseEnter={(e) => toggleCursorType(e.target as HTMLElement, type)}
        onMouseLeave={(e) => toggleCursorType(e.target as HTMLElement, CursorTypes.default)}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};
