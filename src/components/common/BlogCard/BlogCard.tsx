import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import Shiitake from 'shiitake';

import { Button } from '@components/ui/Button';
import ArrowRight from '@public/svg/ArrowRight.svg';
import { prettyDate } from '../../../functions';

import s from './BlogCard.module.sass';

type BlogCardProps = {
  theme?: keyof typeof themeClass
  image: string
  link: string
  category: {
    link: string
    label: string
  }
  date: string
  title: string
  description?: string
  isSection?: boolean
  isDescription?: boolean
  isFullWidth?: boolean
  className?: string
};

const themeClass = {
  primary: s.primary,
  small: s.small,
  dark: s.dark,
};

export const BlogCard: React.FC<BlogCardProps> = ({
  theme = 'primary',
  image,
  link,
  category,
  date,
  title,
  description,
  isSection = false,
  isDescription = false,
  isFullWidth = false,
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    { [s.isDescription]: isDescription },
    { [s.isFullWidth]: isFullWidth },
    className,
  );

  const finalDate = prettyDate(date);

  const headerContent = (
    <>
      <Button
        theme="clean"
        href={category.link}
        className={s.category}
      >
        {category.label}
      </Button>
      <time dateTime={date} title={date} className={s.date}>{finalDate}</time>
      {theme === 'primary' ? (
        <h3 className={s.header}>{title}</h3>
      ) : (
        <Shiitake
          lines={2}
          throttleRate={200}
          className={s.header}
          tagName="h3"
        >
          {title}
        </Shiitake>
      )}
      <Shiitake
        lines={4}
        throttleRate={200}
        className={s.description}
        tagName="p"
      >
        {description}
      </Shiitake>
    </>
  );
  const content = (
    <>
      <Link href={link}>
        <a className={s.link} />
      </Link>
      <div className={s.image}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={s.content}>
        {isSection ? headerContent : (
          <header className={s.heading}>
            {headerContent}
          </header>
        )}
        <footer className={s.button}>
          Читать далее
          <ArrowRight className={s.buttonArrow} />
        </footer>
      </div>
    </>
  );

  return (
    <article className={compoundClassName}>
      {content}
    </article>
  );
};
