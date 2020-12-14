import React, { useState } from 'react';
import cx from 'classnames';

import { FilterScreen } from '@components/products/FilterScreen';
import ChewronDown from '@public/svg/ChewronDown.svg';

import s from './Filters.module.sass';

type FiltersProps = {
  className?: string
};

export const Filters: React.FC<FiltersProps> = ({
  className,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <>
      <div className={cx(s.root, className)}>
        <button
          type="button"
          className={s.button}
          onClick={() => setIsFiltersOpen(true)}
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
      <FilterScreen
        onRequestClose={() => setIsFiltersOpen(false)}
        className={cx(s.filtersScreen, { [s.open]: isFiltersOpen })}
      />
    </>
  );
};
