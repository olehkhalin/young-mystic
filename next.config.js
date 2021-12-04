const path = require('path');
const withReactSvg = require('next-react-svg');
// const { i18n } = require('./next-i18next.config');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/svg'),
  webpack(config) {
    return config;
  },
  // i18n,
  images: {
    domains: ['static.ghost.org', '46.101.240.211'],
  },
});
