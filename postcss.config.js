// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }
  ]
});

const uncss = require('postcss-uncss')({
  html: ['**/*.html']
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['**/*.html', '**/*.js'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
}

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [uncss, cssnano] : [])
  ],
};
