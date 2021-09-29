import React from 'react';
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
      <Header theme={theme} />
      <main className={compoundClassName}>
        {children}
      </main>
      <Subscription />
      <Footer />
    </>
  );
};
