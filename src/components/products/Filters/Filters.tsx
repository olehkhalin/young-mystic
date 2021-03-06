import React, { useState } from 'react';
import cx from 'classnames';

import { FilterScreen } from '@components/products/FilterScreen';
import ChewronDown from '@public/svg/ChewronDown.svg';

import { Button } from '@ui/Button';
import s from './Filters.module.sass';

type FiltersProps = {
  className?: string
};

export const Filters: React.FC<FiltersProps> = ({
  className,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

  return (
    <div className={cx(s.root, className)}>
      <Button
        type="button"
        theme="clean"
        className={cx(s.button, { [s.open]: isFiltersOpen })}
        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
      >
        Выбрать по
        <ChewronDown className={s.icon} />
      </Button>
      <button
        type="button"
        className={cx(s.button, s.sort)}
      >
        Сортировать
        <ChewronDown className={s.icon} />
      </button>
      <FilterScreen
        onRequestClose={() => setIsFiltersOpen(false)}
        className={cx(s.filtersScreen, { [s.open]: isFiltersOpen })}
      />
    </div>
  );
};
