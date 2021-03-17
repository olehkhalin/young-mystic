import React from 'react';
import cx from 'classnames';

import { Separator } from '@ui/Separator';
import { Tag } from '@ui/Tag';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';
import { prettyDate } from '../../../functions';

import s from './Article.module.sass';

type TagProps = {
  id: number
  label: string
  link: string
};

type ArticleProps = {
  image: string
  title: string
  description: string
  date: string
  tags: TagProps[]
  className?: string
};

export const Article: React.FC<ArticleProps> = ({
  image,
  title,
  description,
  date,
  tags,
  children,
  className,
}) => {
  const finalDate = prettyDate(date);

  return (
    <article className={cx(s.root, className)}>
      <header className={s.header}>
        <PageTitle
          image={image}
          title={title}
          description={description}
        />
        <time
          className={s.time}
          dateTime={date}
          title={date}
        >
          {finalDate}
        </time>
      </header>
      <Separator />
      <main className={s.main}>
        <ContentBlock>
          {children}
        </ContentBlock>
      </main>
      <Separator />
      <footer className={s.footer}>
        <h3 className={s.footerHeader}>Теги:</h3>
        <div className={s.tags}>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              href={tag.link}
              theme="secondary"
              className={s.tag}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
      </footer>
    </article>
  );
};
