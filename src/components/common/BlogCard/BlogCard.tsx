import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import Shiitake from 'shiitake';

import { prettyDate } from '@functions';
import { Button } from '@components/ui/Button';
import { CursorTypes } from '@components/common/CursorProvider';
import { CursorWrapper } from '@components/common/CursorWrapper';
import ArrowRight from '@public/svg/ArrowRight.svg';

import s from './BlogCard.module.sass';

type BlogCardProps = {
  theme?: keyof typeof themeClass
  image?: string | null
  slug?: string | null
  category: {
    slug?: string | null
    label?: string | null
  }
  date?: string | null
  title?: string | null
  description?: string | null
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
  slug,
  category,
  date,
  title,
  description,
  isSection = false,
  isDescription = false,
  isFullWidth = false,
  className,
}) => {
  if (!title || !slug) {
    return <></>;
  }

  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    { [s.isDescription]: isDescription },
    { [s.isFullWidth]: isFullWidth },
    className,
  );

  const finalDate = date && prettyDate(date);

  const headerContent = (
    <>
      <Button
        theme="clean"
        href={`/blog/${category.slug}`}
        className={s.category}
      >
        {category.label}
      </Button>
      {date && <time dateTime={date} title={date} className={s.date}>{finalDate}</time>}
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
      <Link href={`/blog/${category.slug}/${slug}`}>
        <a className={s.link} />
      </Link>
      <CursorWrapper
        href={`/blog/${category.slug}/${slug}`}
        className={s.image}
        type={CursorTypes.blog}
      >
        {image && (
          <div className={s.imageInner}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </CursorWrapper>
      <div className={s.content}>
        {isSection ? headerContent : (
          <header className={s.heading}>
            {headerContent}
          </header>
        )}
        <footer className={s.button}>
          <CursorWrapper
            href={`/blog/${category.slug}/${slug}`}
            type={CursorTypes.link}
          >
            Читать далее
          </CursorWrapper>
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
