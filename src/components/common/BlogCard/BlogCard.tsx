import * as React from 'react';
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
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
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
      {theme === 'primary' && <p className={s.description}>{description}</p>}
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
        {theme === 'primary' && (
        <footer className={s.button}>
          Читать далее
          <ArrowRight className={s.buttonArrow} />
        </footer>
        )}
      </div>
    </>
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
