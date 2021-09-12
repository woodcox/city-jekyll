// postcss.config.js

if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/site.js'],
        fontFace: true,
        keyframes: true,
        variables: true
      }),
      require('cssnano')({
        preset: ['default', {
          svgo: true,
          discardComments: {
            removeAll: true,
          },
        }]
      }),
    ],
  },
};

else(module.exports = {
  plugins: [
    require('autoprefixer')
  ],
};

