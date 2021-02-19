import React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { Header } from '@components/common/Header';
import { Subscription } from '@components/common/Subscription';
import { Footer } from '@components/common/Footer';

import s from './BaseLayout.module.sass';

interface BaseLayoutProps {
  theme?: keyof typeof themeClass
  className?: string
}

const themeClass = {
  primary: s.primary,
  light: s.light,
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  theme = 'primary',
  className,
  children,
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    className,
  );

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Medium.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header theme={theme} />
      <main className={compoundClassName}>
        {children}
      </main>
      <Subscription />
      <Footer />
    </>
  );
};
