import React from 'react';
import cx from 'classnames';

import { Blog } from '@containers/Blog/Blog';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import ArrowRight from '@public/svg/ArrowRight.svg';

import s from './CategorySection.module.sass';

type CategorySectionProps = {
  category: {
    label?: string | null
    slug?: string | null
  }
  className?: string
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  className,
}) => {
  if (!category.slug || !category.label) {
    return <></>;
  }

  return (
    <div className={cx(s.root, className)}>
      <Container theme="small">
        <Row>
          <h2 className={s.header}>{category.label}</h2>
          <Blog className={s.blog} category={category.slug} />
          <Button
            theme="clean"
            className={s.button}
            href={`/blog/${category.slug}/`}
          >
            Смотреть еще
            <ArrowRight className={s.icon} />
          </Button>
        </Row>
      </Container>
    </div>
  );
};
