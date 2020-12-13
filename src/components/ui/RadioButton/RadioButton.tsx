import * as React from 'react';
import cx from 'classnames';

import s from './RadioButton.module.sass';

type RadioButtonProps = {
  label: string
} & (React.InputHTMLAttributes<HTMLInputElement>);

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  className,
  id,
  ...props
}) => (
  <label htmlFor={id} className={cx(s.root, className)}>
    {label}
    <input
      id={id}
      type="radio"
      className={s.input}
      {...props}
    />
    <div className={s.radio}>
      <div className={s.circle} />
    </div>
  </label>
);
