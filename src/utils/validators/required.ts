// import { i18n } from 'next-i18next';

export const required = (value: string) => (
  value && value !== ''
    ? undefined
    : 'This field is required'
    // : i18n?.t('common:This field is required')
);
