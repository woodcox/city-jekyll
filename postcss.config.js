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
  content: ['**/*.html', '**/*.js'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
}

const fs = require('fs');

const options = {
  html: ['**/*.html']
};

fs.readFile('css/index.css','utf8', (err, css) => {
  postcss([require('postcss-uncss')(options)])
    .process(css, { from: 'css/app.css', to: 'css/filtered.css' })

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ],
};
