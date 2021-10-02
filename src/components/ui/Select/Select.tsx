import React, { useEffect, useState } from 'react';
import Select, { Props as SelectProps } from 'react-select';
import cx from 'classnames';

import s from './Select.module.sass';

interface SelectUIProps extends SelectProps {
  label: string
  className?: string
}

export const SelectUI: React.FC<SelectUIProps> = ({
  className,
  label,
  value,
  isDisabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(!!(value && value !== ''));

  useEffect(() => {
    if (value && value !== '') {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <div className={cx(s.root, { [s.focused]: isFocused }, { [s.disabled]: isDisabled }, className)}>
      <Select
        isSearchable
        classNamePrefix="customSelect"
        placeholder=''
        value={value}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          if (!!(value && value === '')) {
            setIsFocused(false);
          }
        }}
        isDisabled={isDisabled}
        {...props}
      />
      <div className={s.label}>{label}</div>
    </div>
  );
};
