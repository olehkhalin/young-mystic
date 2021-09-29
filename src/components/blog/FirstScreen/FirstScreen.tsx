import React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Tag } from '@ui/Tag';
import { PageTitle } from '@components/common/PageTitle';

import s from './FirstScreen.module.sass';

type TagsProps = {
  node?: {
    id: string
    slug?: string | null
    name?: string | null
  } | null
} | null;

type FirstScreenProps = {
  tags: TagsProps[]
  className?: string
};

export const FirstScreen: React.FC<FirstScreenProps> = ({
  tags,
  className,
}) => (
  <Container className={cx(s.root, className)} theme="small">
    <Row>
      <PageTitle
        title="Масла, истории, советы и рекомендации"
        className={s.header}
      />
      <div className={s.tags}>
        {tags.map((tag) => tag?.node && (
          <Tag
            className={s.tag}
            href={`/blog/${tag.node.slug}/`}
            key={tag.node.id}
          >
            {tag.node.name}
          </Tag>
        ))}
      </div>
    </Row>
  </Container>
);
