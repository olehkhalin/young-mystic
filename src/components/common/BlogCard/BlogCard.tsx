import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Shiitake from 'shiitake';

import { Button } from '@components/ui/Button';

import ArrowRight from '@public/svg/ArrowRight.svg';
import s from './BlogCard.module.sass';

dayjs.extend(relativeTime);

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
  className,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  const newDate = dayjs(date);
  const dayDiff = dayjs().diff(newDate, 'day');
  const yearDiff = dayjs().diff(newDate, 'year');

  let finalDate;
  if (dayDiff < 10) {
    finalDate = newDate.fromNow();
  } else {
    finalDate = yearDiff === 0 ? newDate.format('D MMMM') : newDate.format('D MMMM YYYY');
  }

  return (
    <article
      className={compoundClassName}
    >
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
        <header className={s.heading}>
          <Button
            theme="clean"
            href={category.link}
            className={s.category}
          >
            {category.label}
          </Button>
          <time dateTime={date} title={date} className={s.date}>{finalDate}</time>
          <Shiitake
            lines={2}
            throttleRate={200}
            className={s.header}
            tagName="h3"
          >
            {title}
          </Shiitake>
          {theme === 'primary' && <p className={s.description}>{description}</p>}
        </header>
        {theme === 'primary' && (
          <footer className={s.button}>
            Читать далее
            <ArrowRight className={s.buttonArrow} />
          </footer>
        )}
      </div>
    </article>
  );
};
