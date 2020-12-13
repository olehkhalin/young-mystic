import * as React from 'react';
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
    <Header theme={headerTheme} />
    <main className={cx(s.root, className)}>
      {children}
    </main>
    <Subscription />
    <Footer />
  </>
);
