import React from 'react';
import { AppProps } from 'next/app';

import { withApollo } from '@client';
import { appWithTranslation } from 'next-i18next';
import '@styles/globals.sass';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withApollo()(appWithTranslation(MyApp));
