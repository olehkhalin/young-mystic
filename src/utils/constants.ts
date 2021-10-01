export const DEFAULT_SEO = {
  TITLE: 'Young Mystic',
  DESCRIPTION: 'Young Mystic Description',
  IMAGE: 'og_image.jpg',
  OG: {
    TYPE: 'website',
    SITE_NAME: 'Young Mystic',
  },
  TWITTER: {
    HANDLE: '@a_moiseyenko',
    SITE: '@YoungMystic',
    CARD_TYPE: 'summary_large_image',
  },
  WEBSITE_URL: 'https://young-mystic.vercel.app/',
};

export const PRODUCTS_PER_PAGE = 12;
export const PRODUCTS_PER_BLOCK = 4;
export const POSTS_PER_PAGE = 7;
export const POSTS_PER_BLOCK = 3;

export const BLOG_API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL;
export const ECOMMERCE_API_URL = process.env.NEXT_PUBLIC_ECOMMERCE_API_URL;

export const NOVA_POCHTA_API_KEY = process.env.NEXT_PUBLIC_NOVA_POCHTA_API_KEY;