import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { motion } from 'framer-motion';

import { prettyPrice } from '@utils/helpers';
import { Tag } from '@ui/Tag';
import { CursorTypes } from '@components/common/CursorProvider';
import { CursorWrapper } from '@components/common/CursorWrapper';

import s from './ProductCard.module.sass';

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
    <CursorWrapper href={link} className={s.link} type={CursorTypes.product}>
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
    </CursorWrapper>
  ) : (
    <CursorWrapper href={link} className={s.link} type={CursorTypes.product}>
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
    </CursorWrapper>
  );

  if (isSection) {
    return (
      <section className={compoundClassName}>
        {content}
      </section>
    );
  }

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={compoundClassName}
    >
      {content}
    </motion.article>
  );
};
