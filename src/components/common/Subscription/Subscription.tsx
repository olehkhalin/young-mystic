import React, { useState } from 'react';
import cx from 'classnames';
import { Field, withTypes } from 'react-final-form';
import { FormApi } from 'final-form';
import createDecorator from 'final-form-focus';

import { composeValidators, required, validateEmail } from '@utils/validators';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import ArrowRight from '@public/svg/ArrowRight.svg';

import s from './Subscription.module.sass';

const focusOnErrors = createDecorator();

type FormValues = {
  email: string
};

type SubscriptionProps = {
  className?: string
};

export const Subscription: React.FC<SubscriptionProps> = ({
  className,
}) => {
  const { Form } = withTypes<FormValues>();
  const [formSendingError, setFormSendingError] = useState('');
  const [formSendingSuccess, setFormSendingSuccess] = useState(false);

  const onSubmit = async (
    values: FormValues,
    form: FormApi<FormValues>,
  ) => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: values.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setFormSendingError(`${error}`);
      return;
    }

    setFormSendingSuccess(true);
    setTimeout(() => {
      setFormSendingSuccess(false);
      setTimeout(form.restart);
    }, 5000);
  };

  return (
    <section className={cx(s.root, className)}>
      <Container>
        <Row className={s.row}>
          <div className={s.content}>
            <h2 className={s.header}>Подпишитесь на нашу рассылку</h2>
            <p className={s.subHeader}>
              Здесь будет текст на две строки с коротким описанием, почему это важно
            </p>
          </div>
          <Form
            onSubmit={onSubmit}
            // @ts-ignore
            decorators={[focusOnErrors]}
            render={({
              handleSubmit, submitting,
            }) => (
              <form className={s.form} onSubmit={handleSubmit}>
                <Field
                  name="email"
                  validate={composeValidators(required, validateEmail)}
                >
                  {({ input, meta }) => (
                    <Input
                      {...input}
                      theme="dark"
                      label="Ваш email"
                      inputClassName={s.input}
                      onChange={(e) => {
                        setFormSendingError('');
                        input.onChange(e);
                      }}
                      error={(meta.touched && meta.error) || meta.submitError || formSendingError}
                    />
                  )}
                </Field>
                <Button
                  type="submit"
                  theme="dark"
                  className={s.button}
                  disabled={(!formSendingError && submitting) || formSendingSuccess}
                >
                  <ArrowRight />
                </Button>
              </form>
            )}
          />
        </Row>
      </Container>
    </section>
  );
};
