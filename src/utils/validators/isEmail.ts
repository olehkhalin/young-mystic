// import { i18n } from 'next-i18next';

const isEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateEmail = (value?: string) => (
  !value || isEmail(value) ? undefined : 'Enter a valid email'
  // !value || isEmail(value) ? undefined : i18n?.t('common:Enter a valid email')
);
