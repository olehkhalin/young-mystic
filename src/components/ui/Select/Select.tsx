import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import cx from 'classnames';

import s from './Select.module.sass';

interface SelectUIProps extends SelectProps {
  className?: string
}

export const SelectUI: React.FC<SelectUIProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cx(s.root, className)}>
      <Select
        classNamePrefix="customSelect"
        {...props}
      />
    </div>
  );
};
