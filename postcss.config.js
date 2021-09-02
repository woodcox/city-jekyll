// postcss.config.js

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('cssnano')({ preset: 'default' }),
  ]
};
