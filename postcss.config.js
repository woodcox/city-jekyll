// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }]
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['**/*.js', './_includes/**/*.html', './_layouts/**/*.html', './_posts/*.md', './*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  css: ['city.css'],
  safelist: {
    standard: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track', 'gradient-text'],
    greedy: [/^bg-/]
  }
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
