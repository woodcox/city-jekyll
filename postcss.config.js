// postcss.config.js

module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
    require('autoprefixer')
  ],
};
