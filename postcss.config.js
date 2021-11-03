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
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['index.html', '**/index.html', 'assest/js/*.js'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ],
};
