import React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Tag } from '@ui/Tag';

import s from './FirstScreen.module.sass';

type TagsProps = {
  link: string
  label: string
};

type FirstScreenProps = {
  tags: TagsProps[]
  className?: string
};

export const FirstScreen: React.FC<FirstScreenProps> = ({
  tags,
  className,
}) => (
  <Container className={cx(s.root, className)}>
    <Row>
      <h1 className={s.header}>Масла, истории, советы и рекомендации</h1>
      <div className={s.tags}>
        {tags.map((tag) => (
          <Tag
            className={s.tag}
            href={tag.link}
            key={tag.link}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
    </Row>
  </Container>
);
