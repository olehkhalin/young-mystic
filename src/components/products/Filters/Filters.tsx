import React from 'react';
import cx from 'classnames';

import ChewronDown from '@public/svg/ChewronDown.svg';

import s from './Filters.module.sass';

type FiltersProps = {
  className?: string
};

export const Filters: React.FC<FiltersProps> = ({
  className,
}) => (
  <div className={cx(s.root, className)}>
    <button
      type="button"
      className={s.button}
    >
      Выбрать по
      <ChewronDown className={s.icon} />
    </button>
    <button
      type="button"
      className={cx(s.button, s.sort)}
    >
      Сортировать
      <ChewronDown className={s.icon} />
    </button>
  </div>
);
