// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: ['default', {
    svgo: true,
    discardComments: {
      removeAll: true,
    },
  }]
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './**/site.js']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ],
};
