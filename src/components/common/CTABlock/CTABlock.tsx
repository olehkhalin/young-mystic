import * as React from 'react';
import cx from 'classnames';

import { Button } from '@components/ui/Button';

import s from './CTABlock.module.sass';

type CTABlockProps = {
  title: string
  description: string
  button: {
    link: string
    label: string
  }
  className?: string
};

export const CTABlock: React.FC<CTABlockProps> = ({
  title,
  description,
  button,
  className,
}) => (
  <div
    className={cx(s.root, className)}
  >
    <h2 className={s.header}>{title}</h2>
    <p className={s.description}>{description}</p>
    <Button
      href={button.link}
      theme="secondary"
    >
      {button.label}
    </Button>
  </div>
);
