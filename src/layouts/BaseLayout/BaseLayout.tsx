import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { Header } from '@components/common/Header';
import { Subscription } from '@components/common/Subscription';
import { Footer } from '@components/common/Footer';

import s from './BaseLayout.module.sass';

interface BaseLayoutProps {
  headerTheme?: 'primary' | 'light'
  className?: string
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  headerTheme,
  className,
  children,
}) => (
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
    <Header theme={headerTheme} />
    <main className={cx(s.root, className)}>
      {children}
    </main>
    <Subscription />
    <Footer />
  </>
);
