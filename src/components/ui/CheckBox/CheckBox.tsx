import React, { useContext } from 'react';
import cx from 'classnames';

import CheckMark from '@public/svg/CheckMark.svg';

import { CursorContext, CursorTypes } from '@components/common/CursorProvider';
import s from './CheckBox.module.sass';

type CheckBoxProps = {
  label: string
} & (React.InputHTMLAttributes<HTMLInputElement>);

export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  className,
  id,
  ...props
}) => {
  const { toggleCursorType } = useContext(CursorContext);

  return (
    <label
      htmlFor={id}
      className={cx(s.root, className)}
      onMouseEnter={(e) => toggleCursorType(
        e.target as HTMLElement,
        CursorTypes.checkBox,
      )}
      onMouseLeave={(e) => toggleCursorType(
        e.target as HTMLElement,
        CursorTypes.default,
      )}
    >
      {label}
      <input
        type="checkbox"
        className={s.input}
        id={id}
        {...props}
      />
      <span className={s.checkmark}>
        <CheckMark className={s.icon} />
      </span>
    </label>
  );
};
