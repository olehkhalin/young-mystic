import * as React from 'react';
import Image from 'next/image';

import s from './ImageTitle.module.sass';

type ImageTitleProps = {
  image?: string
  title: string
  className?: string
};

export const ImageTitle: React.FC<ImageTitleProps> = ({
  image,
  title,
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
    <h1 className={s.header}>{title}</h1>
  </div>
);
