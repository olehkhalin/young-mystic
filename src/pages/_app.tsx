import React from 'react';

import { appWithTranslation } from '@i18n';
import '@styles/globals.sass';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
