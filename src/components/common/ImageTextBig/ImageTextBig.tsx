import * as React from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { Button } from '@components/ui/Button';

import s from './ImageTextBig.module.sass';

type ImageTextBigProps = {
  image: string
  subHeader: string
  title: string
  description: ReactNode
  button: {
    link: string
    label: string
  }
  className?: string
};

export const ImageTextBig: React.FC<ImageTextBigProps> = ({
  image,
  subHeader,
  title,
  description,
  button,
  className,
}) => (
  <article
    className={cx(s.root, className)}
  >
    <Image
      src={image}
      alt={title}
      width={327}
      height={377}
      layout="responsive"
    />
    <span className={s.category}>
      {subHeader}
    </span>
    <h3 className={s.header}>{title}</h3>
    {description}
    <Button
      className={s.button}
      href={button.link}
    >
      {button.label}
    </Button>
  </article>
);
