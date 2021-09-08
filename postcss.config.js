// postcss.config.js

module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        svgo: true,
        discardComments: {
          removeAll: true,
        },
      }]
    }),
    require('autoprefixer'),
    require('purgecss')({
      content: ['./**/*.html']
    })
  ],
};
