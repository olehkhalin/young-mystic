import React, { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import s from './BreadCrumbs.module.sass';

type NavLinkProps = {
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
          <Link href={link.link} key={link.title}>
            <a className={s.link}>{link.title}</a>
          </Link>
        )
        : (
          <span className={s.current} key={link.title}>
            {link.title}
          </span>
        ),
    );
    if (index !== navLinks.length - 1) {
      content.push(
        <span className={s.separator}>/</span>,
      );
    }
  });

  return (
    <div className={cx(s.root, className)}>
      {content}
    </div>
  );
};
