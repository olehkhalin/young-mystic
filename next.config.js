const path = require('path');

const withReactSvg = require('next-react-svg');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  uk: 'uk'
};

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/svg'),
  webpack(config, options) {
    return config
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  images: {
    domains: ['static.ghost.org', '46.101.240.211'],
  },
})