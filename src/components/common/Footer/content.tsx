import * as React from 'react';
import { ReactNode } from 'react';

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
        link: '/blog',
      },
      {
        title: 'Эфирные масла',
        link: '/blog',
      },
      {
        title: 'Красота',
        link: '/blog',
      },
      {
        title: 'Здоровье',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Магазин',
    links: [
      {
        title: 'Каталог',
        link: '/blog',
      },
      {
        title: 'Доставка и оплата',
        link: '/blog',
      },
      {
        title: 'Способы и условия возврата',
        link: '/blog',
      },
      {
        title: 'Рекламации',
        link: '/blog',
      },
    ],
  },
  {
    title: 'О Young living',
    links: [
      {
        title: 'Эфирные масла',
        link: '/blog',
      },
      {
        title: 'Сообщество Young Living',
        link: '/blog',
      },
      {
        title: 'Присоединиться к сообществу',
        link: '/blog',
      },
      {
        title: 'Начало своего бизнеса',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Персональные данные',
    links: [
      {
        title: 'Договор публичной оферты',
        link: '/blog',
      },
      {
        title: 'Политика конфиденциальности',
        link: '/blog',
      },
    ],
  },
];

type MenuNavLinksProps = {
  title: string
  link?: string
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
    collapse: [
      {
        title: 'Что такое эфирные масла, зачем их использовать и как?',
        link: '/product',
      },
      {
        title: 'Почему Young Living?',
        link: '/product',
      },
      {
        title: 'Гармоничный бизнес начинается здесь',
        link: '/product',
      },
      {
        title: 'Сообщество Young Living',
        link: '/product',
      },
    ],
  },
  {
    title: 'Блог',
    collapse: [
      {
        title: 'Эфирные масла',
        link: '/product',
      },
      {
        title: 'Красота',
        list: [
          {
            title: 'Масла для волос',
            link: '/product',
          },
          {
            title: 'Масла для тела',
            link: '/product',
          },
          {
            title: 'Масла для ухода',
            link: '/product',
          },
        ],
      },
      {
        title: 'Здоровье',
        list: [
          {
            title: 'Для здоровья всей семьи',
            link: '/product',
          },
          {
            title: 'Масло как витаминная добавка ',
            link: '/product',
          },
          {
            title: 'Масла от болезней',
            link: '/product',
          },
        ],
      },
      {
        title: 'Истории Д. Гери Янга',
        link: '/product',
      },
      {
        title: 'Смотреть все статьи',
        link: '/product',
      },
    ],
  },
  {
    title: 'Магазин',
    collapse: [
      {
        title: 'Новинки',
        link: '/product',
      },
      {
        title: 'Эфирные масла',
        list: [
          {
            title: 'Эфирные масла',
            link: '/product',
          },
          {
            title: 'Смеси эфирных масел',
            link: '/product',
          },
          {
            title: 'Массажные масла',
            link: '/product',
          },
        ],
      },
      {
        title: 'Диффузоры и приспособления',
        link: '/product',
      },
      {
        title: 'Личная гигиена',
        link: '/product',
      },
      {
        title: 'Стартовые наборы',
        link: '/product',
      },
      {
        title: 'Смотреть все товары',
        link: '/product',
      },
    ],
  },
  {
    title: 'Контакты',
    link: '/about',
  },
];
