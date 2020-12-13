import * as React from 'react';
import cx from 'classnames';

import s from './TitleDescription.module.sass';

type TitleDescriptionProps = {
  title: string
  description: string
  className?: string
};

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  className,
}) => (
  <div
    className={cx(s.root, className)}
  >
    <h2 className={s.header}>{title}</h2>
    <p className={s.description}>{description}</p>
  </div>
);
