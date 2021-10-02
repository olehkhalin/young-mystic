const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'ua'],
    localePath: path.resolve('./public/static/locales'),
    keySeparator: false,
  },
};
