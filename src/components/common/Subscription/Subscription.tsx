import * as React from 'react';
import cx from 'classnames';

import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import ArrowRight from '@public/svg/ArrowRight.svg';

import s from './Subscription.module.sass';

type SubscriptionProps = {
  className?: string
};

export const Subscription: React.FC<SubscriptionProps> = ({
  className,
}) => (
  <section className={cx(s.root, className)}>
    <Container>
      <Row className={s.row}>
        <h2 className={s.header}>Подпишитесь на нашу рассылку</h2>
        <p className={s.subHeader}>
          Здесь будет текст на две строки с коротким описанием, почему это важно
        </p>
        <form className={s.form}>
          <Input theme="dark" type="email" label="Ваш email" inputClassName={s.input} />
          <Button theme="dark" className={s.button}><ArrowRight /></Button>
        </form>
      </Row>
    </Container>
  </section>
);
