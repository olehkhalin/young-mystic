import React from 'react';
import cx from 'classnames';

import Minus from '@public/svg/Minus.svg';
import Plus from '@public/svg/Plus.svg';

import s from './PlusMinusInput.module.sass';

type PlusMinusInputProps = {
  minValue: number
  maxValue: number
  value: number
  onValueChange: (val: number) => void
} & (React.InputHTMLAttributes<HTMLInputElement>);

export const PlusMinusInput: React.FC<PlusMinusInputProps> = ({
  minValue,
  maxValue,
  className,
  value,
  onValueChange,
  ...props
}) => (
  <div className={cx(s.root, className)}>
    <button
      type="button"
      className={cx(s.button, s.minus)}
      disabled={value - 1 < minValue}
      onClick={() => {
        if (value - 1 >= minValue) {
          onValueChange(value - 1);
        }
      }}
    >
      <Minus className={s.icon} />
    </button>
    <input
      type="text"
      className={s.input}
      value={value}
      disabled
      {...props}
    />
    <button
      type="button"
      className={cx(s.button, s.plus)}
      disabled={value + 1 > maxValue}
      onClick={() => {
        if (value + 1 <= maxValue) {
          onValueChange(value + 1);
        }
      }}
    >
      <Plus className={s.icon} />
    </button>
  </div>
);
