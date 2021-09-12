// postcss.config.js

module.exports = {
  plugins: [
    require('autoprefixer')
    if(process.env.NODE_ENV === 'production') {
      , require('@fullhuman/postcss-purgecss')({
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
    }
  ],
};

