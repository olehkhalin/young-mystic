import React from 'react';
import cx from 'classnames';

import { CursorWrapper } from '@components/common/CursorWrapper';
import { CursorTypes } from '@components/common/CursorProvider';

import { SocialLinks } from './content';
import s from './Share.module.sass';

type ShareProps = {
  link: string
  className?: string
};

export const Share: React.FC<ShareProps> = ({
  link,
  className,
}) => {
  return (
    <div className={cx(s.root, className)}>
      <h3 className={s.header}>
        Поделиться:
      </h3>
      <div className={s.socials}>
        {SocialLinks.map(({ link: social, icon }) => (
          <CursorWrapper
            key={social}
            className={s.socialLink}
            href={`${social}${link}`}
            external
            type={CursorTypes.pointer}
          >
            {icon}
          </CursorWrapper>
        ))}
      </div>
    </div>
  );
};
