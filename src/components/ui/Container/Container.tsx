import * as React from 'react';
import { RefObject } from 'react';
import cx from 'classnames';

import s from './Container.module.sass';

type ContainerProps = {
  reference?: RefObject<HTMLDivElement>
  className?: string
  theme?: keyof typeof themeClass
};

const themeClass = {
  default: s.default,
  small: s.small,
};

export const Container: React.FC<ContainerProps> = ({
  reference,
  theme = 'default',
  children,
  className,
}) => (
  <div
    className={cx(
      s.root,
      themeClass[theme],
      className,
    )}
    ref={reference && reference}
  >
    {children}
  </div>
);
