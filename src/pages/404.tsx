import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Lottie from 'react-lottie';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Button } from '@ui/Button';
import animationData from '@animations/page404.json';

import s from '@styles/Page404.module.sass';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'none',
  },
};

const Page404: React.FC = () => (
  <BaseLayout className={s.main}>
    <Container className={s.container}>
      <Row className={s.row}>
        <div className={s.animation}>
          <Lottie options={defaultOptions} />
        </div>
        <div className={s.content}>
          <h1 className={s.header}>О, нет!</h1>
          <p className={s.description}>
            Страницы, которую вы ищете, не существует или она была перенесена в другой раздел
          </p>
          <div className={s.buttons}>
            <Button
              href='/products'
              className={s.button}
            >
              Перейти в магазин
            </Button>
            <Button
              theme='secondary'
              href='/blog'
              className={s.button}
            >
              Перейти в блог
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'error-page']),
  },
});

export default Page404;
