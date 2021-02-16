import React from 'react';
import Head from 'next/head';
import { useTranslation } from '@i18n';

import { BaseLayout } from '@layouts/BaseLayout';

import styles from '@styles/Home.module.sass';
import { CountriesListContainer } from '@containers/CountriesList';

const Home = () => {
  const { t } = useTranslation(['common', 'index']);

  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        {t('Добро пожаловать в')}
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.description}>
        Get started by editing
        {' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            {t('index:Быстро деплойте ваш Next.js сайт на публичный URL с Vercel')}
          </p>
        </a>
      </div>

      <CountriesListContainer />
    </BaseLayout>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'index'],
});

export default Home;
