import path from 'path';
import NextI18Next from 'next-i18next';

const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const i18next = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['uk'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  keySeparator: false
});

export const {
  Link,
  Router,
  useTranslation,
  appWithTranslation,
  i18n,
} = i18next;