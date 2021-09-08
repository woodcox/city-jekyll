// postcss.config.js

module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html']
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
