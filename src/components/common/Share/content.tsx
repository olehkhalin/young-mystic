import React, { ReactNode } from 'react';

import Facebook from '@public/svg/Facebook.svg';
import Telegram from '@public/svg/Telegram.svg';
import Viber from '@public/svg/Viber.svg';
import Twitter from '@public/svg/Twitter.svg';
import LinkedIn from '@public/svg/LinkedIn.svg';
// import Link from '@public/svg/Link.svg';

type SocialLinksProps = {
  link: string
  icon: ReactNode
}[];

export const SocialLinks: SocialLinksProps = [
  {
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
    icon: <Facebook />,
  },
  {
    link: 'https://t.me/share/url?url=',
    icon: <Telegram />,
  },
  {
    link: 'viber://forward?text=',
    icon: <Viber />,
  },
  {
    link: 'https://twitter.com/intent/tweet?url=',
    icon: <Twitter />,
  },
  {
    link: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    icon: <LinkedIn />,
  },
];