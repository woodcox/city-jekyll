// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true,
};
const cssnano = require('cssnano')({
  preset: ['advanced', { cssnanoConfig }
  ]
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
