import React, { ReactNode } from 'react';

import Facebook from '@public/svg/Facebook.svg';
import Instagram from '@public/svg/Instagram.svg';
import Telegram from '@public/svg/Telegram.svg';
import Viber from '@public/svg/Viber.svg';

type SocialLinksProps = {
  link: string
  icon: ReactNode
}[];

export const SocialLinks: SocialLinksProps = [
  {
    link: 'https://www.facebook.com/yl.ukraine/',
    icon: <Facebook />,
  },
  {
    link: 'http://instagram.com/youngliving.ukraine',
    icon: <Instagram />,
  },
  {
    link: 'https://t.me/Y_Mystic',
    icon: <Telegram />,
  },
  {
    link: 'https://invite.viber.com/?g=6-Q1kH5nekrjhzolW8CMQi_EdmJInYUp&lang=en',
    icon: <Viber />,
  },
];

type NavLinksProps = {
  title: string
  links: {
    title: string
    link: string
  } []
}[];

export const NavLinks: NavLinksProps = [
  {
    title: 'Блог',
    links: [
      {
        title: 'Истории Д. Гери Янга',
        link: '/blog-category-1',
      },
      {
        title: 'Эфирные масла',
        link: '/blog-category-2',
      },
      {
        title: 'Красота',
        link: '/blog-category-3',
      },
      {
        title: 'Здоровье',
        link: '/blog-category-4',
      },
    ],
  },
  {
    title: 'Магазин',
    links: [
      {
        title: 'Каталог',
        link: '/products',
      },
      {
        title: 'Доставка и оплата',
        link: '/payment-delivery',
      },
      {
        title: 'Способы и условия возврата',
        link: '/replacement-and-return',
      },
      {
        title: 'Рекламации',
        link: '/complaint',
      },
    ],
  },
  {
    title: 'О Young living',
    links: [
      {
        title: 'Эфирные масла',
        link: '/blog-category',
      },
      {
        title: 'Сообщество Young Living',
        link: '/oil-life',
      },
      {
        title: 'Присоединиться к сообществу',
        link: '/wholesale-account',
      },
      {
        title: 'Начало своего бизнеса',
        link: '/vozmozhnosti-young-living',
      },
    ],
  },
  {
    title: 'Персональные данные',
    links: [
      {
        title: 'Договор публичной оферты',
        link: '/offer-agreement',
      },
      {
        title: 'Политика конфиденциальности',
        link: '/privacy-policy',
      },
    ],
  },
];

type MenuNavLinksProps = {
  title: string
  link: string
  collapse?: {
    title?: string
    link?: string
    list?: {
      title: string
      link: string
    } []
  } []
}[];

export const MenuNavLinks: MenuNavLinksProps = [
  {
    title: 'Обо мне',
    link: '/about',
    collapse: [
      {
        title: 'Обо мне',
        link: '/about',
      },
      {
        title: 'Сообщество Young Living',
        link: '/oil-life',
      },
    ],
  },
  {
    title: 'Oil life',
    link: '/oil-life',
    collapse: [
      {
        title: 'Что такое эфирные масла, зачем их использовать и как?',
        link: '/chto-takoe-jefirnye-masla-voobshhe',
      },
      {
        title: 'Почему Young Living?',
        link: '/pochemu-young-living',
      },
      {
        title: 'Гармоничный бизнес начинается здесь',
        link: '/vozmozhnosti-young-living',
      },
      {
        title: 'Сообщество Young Living',
        link: '/oil-life',
      },
    ],
  },
  {
    title: 'Блог',
    link: '/blog',
    collapse: [
      {
        title: 'Эфирные масла',
        link: '/blog-category-1',
      },
      {
        title: 'Красота',
        list: [
          {
            title: 'Масла для волос',
            link: '/blog-category-2',
          },
          {
            title: 'Масла для тела',
            link: '/blog-category-3',
          },
          {
            title: 'Масла для ухода',
            link: '/blog-category-4',
          },
        ],
      },
      {
        title: 'Здоровье',
        list: [
          {
            title: 'Для здоровья всей семьи',
            link: '/blog-category-5',
          },
          {
            title: 'Масло как витаминная добавка ',
            link: '/blog-category-6',
          },
          {
            title: 'Масла от болезней',
            link: '/blog-category-7',
          },
        ],
      },
      {
        title: 'Истории Д. Гери Янга',
        link: '/blog-category-8',
      },
      {
        title: 'Смотреть все статьи',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Магазин',
    link: '/products',
    collapse: [
      {
        title: 'Новинки',
        link: '/products/monomasla',
      },
      {
        title: 'Эфирные масла',
        list: [
          {
            title: 'Эфирные масла',
            link: '/products/monomasla',
          },
          {
            title: 'Смеси эфирных масел',
            link: '/products/smesi-jefirnyh-masel',
          },
          {
            title: 'Массажные масла',
            link: '/products/smesi-dlja-zhivotnyh',
          },
        ],
      },
      {
        title: 'Диффузоры и приспособления',
        link: '/products/masla-dlja-kuhni',
      },
      {
        title: 'Личная гигиена',
        link: '/products/diffuzory-i-prisposoblenija',
      },
      {
        title: 'Стартовые наборы',
        link: '/products/kollekcii-masel',
      },
      {
        title: 'Смотреть все товары',
        link: '/products',
      },
    ],
  },
  {
    title: 'Контакты',
    link: '/contacts',
  },
];
