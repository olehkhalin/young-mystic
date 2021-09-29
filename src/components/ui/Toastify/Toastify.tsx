import React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import Close from '@public/svg/Close.svg';

import s from './Toastify.module.sass';

type ToastifyProps = {
  closeToast?: () => void
  isCloseable?: boolean
  className?: string
};

export const Toastify: React.FC<ToastifyProps> = ({
  closeToast,
  isCloseable = true,
  className,
  children,
}) => (
  <Container>
    <Row>
      <div className={cx(s.root, { [s.closeable]: isCloseable }, className)}>
        {isCloseable && (
          <button
            type="button"
            onClick={closeToast}
            className={s.close}
          >
            <Close />
          </button>
        )}
        {children}
      </div>
    </Row>
  </Container>
);
