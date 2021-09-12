// postcss.config.js

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './**/site.js'],
  fontFace: true,
  keyframes: true,
  variables: true
}),

const nano = require('cssnano')({ 
  preset: ['default', {
    svgo: true,
    discardComments: {
      removeAll: true,
    },
  }],
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ...(process.env.NODE_ENV === 'production' ? [nano] : [])
  ]
};
