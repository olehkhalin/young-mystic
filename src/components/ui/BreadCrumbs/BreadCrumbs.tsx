import React, { ReactNode } from 'react';
import cx from 'classnames';

import { CursorWrapper } from '@components/common/CursorWrapper';
import { CursorTypes } from '@components/common/CursorProvider';

import s from './BreadCrumbs.module.sass';

export type NavLinkProps = {
  title: string
  link?: string
};

type ContainerProps = {
  className?: string
  navLinks: NavLinkProps[]
};

export const BreadCrumbs: React.FC<ContainerProps> = ({
  className,
  navLinks,
}) => {
  const content: ReactNode[] = [];

  navLinks.forEach((link, index) => {
    content.push(
      link.link
        ? (
          <CursorWrapper
            href={link.link}
            key={link.link}
            className={s.link}
            type={CursorTypes.link}
          >
            {link.title}
          </CursorWrapper>
        )
        : (
          <span className={s.current} key={link.title}>
            {link.title}
          </span>
        ),
    );
    if (index !== navLinks.length - 1) {
      content.push(
        // eslint-disable-next-line react/no-array-index-key
        <span key={`seperator-${index}`} className={s.separator}>/</span>,
      );
    }
  });

  return (
    <div className={cx(s.root, className)}>
      {content}
    </div>
  );
};
