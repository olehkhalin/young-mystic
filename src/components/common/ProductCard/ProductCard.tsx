import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { Tag } from '@components/ui/Tag';

import s from './ProductCard.module.sass';

type ProductCardProps = {
  theme?: keyof typeof themeClass
  image: string
  link: string
  title: string
  price: number
  isNew?: boolean
  isSale?: boolean
  className?: string
};

const themeClass = {
  primary: s.primary,
  small: s.small,
};

export const ProductCard: React.FC<ProductCardProps> = ({
  theme = 'primary',
  image,
  link,
  title,
  price,
  isNew = false,
  isSale = false,
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const tags = [];
  if (isSale) {
    tags.push(
      <Tag theme="smallSecondary">Sale</Tag>,
    );
  }
  if (isNew) {
    tags.push(
      <Tag theme="smallPrimary">New</Tag>,
    );
  }

  if (theme === 'small') {
    return (
      <div className={compoundClassName}>
        <Link href={link}>
          <a className={s.link} />
        </Link>
        <div className={s.content}>
          <h3 className={s.header}>{title}</h3>
          <p className={s.price}>
            {price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 2 })}
            ₴
          </p>
        </div>
        <div className={s.image}>
          <Image
            src={image}
            alt={title}
            width={53}
            height={60}
            layout="responsive"
          />
        </div>
      </div>
    );
  }

  return (
    <Link href={link}>
      <a className={compoundClassName}>
        {tags && (
        <div className={s.tags}>
          {tags}
        </div>
        )}
        <div className={s.image}>
          <Image
            src={image}
            alt={title}
            width={140}
            height={160}
            layout="responsive"
          />
        </div>
        <h3 className={s.header}>{title}</h3>
        <p className={s.price}>
          {price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 2 })}
          ₴
        </p>
      </a>
    </Link>
  );
};
