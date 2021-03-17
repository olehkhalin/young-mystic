import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { Tag } from '@components/ui/Tag';

import s from './ProductCard.module.sass';
import { prettyPrice } from '../../../functions';

type ProductCardProps = {
  theme?: keyof typeof themeClass
  image: string
  link: string
  title: string
  price: number
  isNew?: boolean
  isSale?: boolean
  isSection?: boolean
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
  isSection = false,
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

  const content = theme === 'small' ? (
    <Link href={link}>
      <a className={s.link}>
        <div className={s.content}>
          <h3 className={s.header}>{title}</h3>
          <p className={s.price}>
            {prettyPrice(price)}
          </p>
        </div>
        <div className={s.image}>
          <Image
            src={image}
            alt={title}
            width={60}
            height={60}
            layout="responsive"
          />
        </div>
      </a>
    </Link>
  ) : (
    <Link href={link}>
      <a className={s.link}>
        {tags && (
          <div className={s.tags}>
            {tags}
          </div>
        )}
        <div className={s.image}>
          <Image
            src={image}
            alt={title}
            width={136}
            height={160}
            layout="responsive"
          />
        </div>
        <h3 className={s.header}>{title}</h3>
        <p className={s.price}>
          {prettyPrice(price)}
        </p>
      </a>
    </Link>
  );

  if (isSection) {
    return (
      <section className={compoundClassName}>
        {content}
      </section>
    );
  }

  return (
    <article className={compoundClassName}>
      {content}
    </article>
  );
};
