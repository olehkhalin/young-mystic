import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import s from './ProductImage.module.sass';

type ProductImageProps = {
  image: string
  title: string
  className?: string
};

export const ProductImage: React.FC<ProductImageProps> = ({
  image,
  title,
  className,
}) => (
  <div className={cx(s.root, className)}>
    <Image
      src={image}
      alt={title}
      width={282}
      height={360}
      layout="responsive"
    />
  </div>
);
