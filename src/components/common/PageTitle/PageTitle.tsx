import * as React from 'react';
import Image from 'next/image';

import s from './PageTitle.module.sass';

type PageTitleProps = {
  image?: string
  title?: string
  description?: string
  className?: string
};

export const PageTitle: React.FC<PageTitleProps> = ({
  image,
  title,
  description,
  className,
}) => (
  <div className={className}>
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
    {description && <p className={s.description}>{description}</p>}
  </div>
);
