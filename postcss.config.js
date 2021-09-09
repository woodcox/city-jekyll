// postcss.config.js

module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html', 'site.js'],
      fontFace: true,
      keyframes: true,
      variables: true,
      rejected: true
    }),
    require('cssnano')({
      preset: ['default', {
        svgo: true,
        discardComments: {
          removeAll: true,
        },
      }]
    }),
    require('autoprefixer')
  ],
};
