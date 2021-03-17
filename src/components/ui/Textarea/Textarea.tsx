import * as React from 'react';
import { useState } from 'react';
import cx from 'classnames';

import s from './Textarea.module.sass';

type TextareaProps = {
  label?: string
  error?: string
  success?: boolean
  textareaClassName?: string
} & (React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error = '',
  success = false,
  className,
  textareaClassName,
  value,
  disabled,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(value !== '');

  const compoundClassName = cx(
    s.root,
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
        <textarea
          {...props}
          className={cx(s.textarea, textareaClassName)}
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
