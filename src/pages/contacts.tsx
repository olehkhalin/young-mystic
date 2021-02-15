import React from 'react';
import cx from 'classnames';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { ContactForm } from '@components/common/ContactForm';

import s from '@styles/Contacts.module.sass';

const ProductsPage = () => (
  <BaseLayout>
    <Container theme="small">
      <Row className={s.row}>
        <h1 className={s.header}>Связаться с нами</h1>
        <p className={s.description}>
          Вы всегда можете связаться с нами, чтобы получить дополнительную информацию или узнать,
          как разместить заказ на сайте Young Living:
        </p>
        <Separator className={s.separator} />
        <div>
          <h2 className={s.title}>По телефону:</h2>
          <a
            href="tel:+380678287171"
            className={s.link}
          >
            +38 (067) 828 71 71 — Андрей
          </a>
          <a
            href="tel:+380977568431"
            className={s.link}
          >
            +38 (097) 756 84 31 —  Анна
          </a>
        </div>
        <Separator className={s.separator} />
        <div>
          <h2 className={s.title}>По почте:</h2>
          <a
            href="mailto:youngliving.ua@outlook.com"
            className={s.link}
          >
            youngliving.ua@outlook.com
          </a>
        </div>
        <Separator className={cx(s.separator, s.separatorBottom)} />
        <h2 className={s.title}>Через форму обратной связи:</h2>
        <ContactForm />
      </Row>
    </Container>
  </BaseLayout>
);

export default ProductsPage;
