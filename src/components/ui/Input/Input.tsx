import * as React from 'react';
import { useState } from 'react';
import cx from 'classnames';

import s from './Input.module.sass';

type InputProps = {
  theme?: keyof typeof themeClass
  label?: string
  error?: string
  success?: boolean
} & (React.InputHTMLAttributes<HTMLInputElement>);

const themeClass = {
  primary: s.primary,
  dark: s.dark,
};

export const Input: React.FC<InputProps> = ({
  theme = 'primary',
  label,
  error = '',
  success = false,
  className,
  value,
  disabled,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(value !== '');

  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    { [s.focused]: isFocused },
    { [s.error]: error },
    { [s.success]: success },
    { [s.disabled]: disabled },
    className,
  );

  return (
    <div className={compoundClassName}>
      <div
        className={s.wrapper}
      >
        <input
          {...props}
          className={s.input}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={(e) => {
            if (value === '') {
              setIsFocused(false);
            }
            if (onBlur) {
              onBlur(e);
            }
          }}
          disabled={disabled}
          value={value}
        />
        {label && <div className={s.label}>{label}</div>}
      </div>
      <div className={s.errorContainer}>
        {error && <div className={s.errorText}>{error}</div>}
      </div>
    </div>
  );
};
