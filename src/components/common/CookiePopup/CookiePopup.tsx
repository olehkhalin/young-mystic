import React from 'react';
import CookieConsent from 'react-cookie-consent';

import Donut from '@public/svg/Donut.svg';

import s from './CookiePopup.module.sass';
import { Button } from '@ui/Button';

export const CookiePopup = () => (
  <CookieConsent
    buttonText="Окей, я не против"
    disableStyles
    disableButtonStyles
    expires={365}
    containerClasses={s.container}
    contentClasses={s.content}
    buttonClasses={s.button}
    buttonWrapperClasses={s.buttonWrapper}
  >
    <Donut className={s.icon} />
    <p className={s.description}>
      Мы собираем куки, чтобы вам было удобно пользоваться нашим сайтом
    </p>
    <Button
      theme='clean'
      href='/privacy-policy'
      className={s.privacy}
    >
      Политика конфиденциальности
    </Button>
  </CookieConsent>
);