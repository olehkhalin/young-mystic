import React from 'react';
import cx from 'classnames';

import { Separator } from '@ui/Separator';
import { Tag } from '@ui/Tag';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';
import { prettyDate } from '../../../functions';

import s from './Article.module.sass';

type TagProps = {
  id: string
  name?: string | null
  visibility?: string | null
} | null;

type ArticleProps = {
  image?: string | null
  title: string
  description?: string | null
  date?: string | null
  tags?: TagProps[] | null
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
  const finalTags = tags ? tags.filter((tag) => tag?.visibility === 'internal') : [];

  return (
    <article className={cx(s.root, className)}>
      <header>
        <PageTitle
          image={image}
          title={title}
          description={description}
        />
        {date && (
          <time
            className={s.time}
            dateTime={date}
            title={date}
          >
            {prettyDate(date)}
          </time>
        )}
      </header>
      <Separator />
      <main className={s.main}>
        <ContentBlock>
          {children as string}
        </ContentBlock>
      </main>
      {finalTags?.length > 0 && (
        <>
          <Separator />
          <footer className={s.footer}>
            <h3 className={s.footerHeader}>Теги:</h3>
            <div className={s.tags}>
              {finalTags.map((tag) => tag?.name && (
              <Tag
                key={tag.id}
                theme="secondary"
                className={s.tag}
              >
                {tag.name}
              </Tag>
              ))}
            </div>
          </footer>
        </>
      )}
    </article>
  );
};
