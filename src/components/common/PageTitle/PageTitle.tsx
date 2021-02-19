import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import s from './PageTitle.module.sass';

type PageTitleProps = {
  image?: string
  title?: string
  blockquote?: string
  description?: string | null
  className?: string
};

export const PageTitle: React.FC<PageTitleProps> = ({
  image,
  title,
  blockquote,
  description,
  className,
}) => (
  <div className={cx(s.root, className)}>
    {image && (
      <div className={s.image}>
        <Image
          src={image}
          alt={title}
          width={158}
          height={158}
          layout="responsive"
        />
      </div>
    )}
    {title && <h1 className={s.header}>{title}</h1>}
    {blockquote && <blockquote className={s.blockquote}>{blockquote}</blockquote>}
    {description && <p className={s.description}>{description}</p>}
  </div>
);
