export const PRODUCTS = [
  {
    id: 0,
    link: '/',
    title: 'Эфирное масло Пало Санто',
    price: 1530,
    image: '/images/product_1.png',
  },
  {
    id: 1,
    link: '/',
    title: 'Эфирное масло Иланг Иланг',
    price: 1810,
    image: '/images/product_2.png',
    isSale: true,
  },
  {
    id: 2,
    link: '/',
    title: 'Эфирное масло Полыни',
    price: 1720,
    image: '/images/product_3.png',
    isNew: true,
  },
  {
    id: 3,
    link: '/',
    title: 'Эфирное масло Священного Сандала',
    price: 4290,
    image: '/images/product_4.png',
  },
];

export const POSTS = [
  {
    id: 0,
    link: '/',
    image: '/images/blog_3.jpg',
    category: {
      link: '/',
      label: 'Эфирные масла',
    },
    title: 'Откройте свой разум, чтобы начать внутреннее исследование, с эфирными маслами',
    date: '2020-11-13',
  },
  {
    id: 1,
    link: '/',
    image: '/images/blog_2.jpg',
    category: {
      link: '/',
      label: 'Эфирные масла',
    },
    title: 'Использование эфирных масел при беременности',
    date: '2020-10-06',
  },
  {
    id: 2,
    link: '/',
    image: '/images/blog_1.jpg',
    category: {
      link: '/',
      label: 'Эфирные масла',
    },
    title: 'Свяжитесь с эмоциями через письмо и эфирные масла',
    date: '2020-10-23',
  },
];

export const TAGS = [
  {
    label: 'Красота',
    link: '/blog-tag',
  },
  {
    label: 'Эфирные масла',
    link: '/blog-tag',
  },
  {
    label: 'Истории Гери Янга',
    link: '/blog-tag',
  },
  {
    label: 'Здоровье',
    link: '/blog-tag',
  },
  {
    label: 'Работа',
    link: '/blog-tag',
  },
];
