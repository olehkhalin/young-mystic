import React from 'react';
import cx from 'classnames';

import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button';

import s from './ContactForm.module.sass';

type ContactFormProps = {
  className?: string
};

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
}) => (
  <form className={cx(s.root, className)}>
    <Input
      className={s.input}
      type="text"
      name="name"
      label="Имя"
    />
    <Input
      className={s.input}
      type="text"
      name="surname"
      label="Фамилия"
    />
    <Input
      className={s.input}
      type="text"
      name="number"
      label="Номер заказа"
    />
    <p className={s.formDescription}>
      Номер заказа указан в письме-подтверждении после оформления заказа на сайте. Укажите
      город и примерную дату заказа, если вы не можете найти номер заказа
    </p>
    <Textarea
      className={s.textarea}
      label="Введите текст сообщения"
    />
    <Button>Отправить</Button>
  </form>
);
