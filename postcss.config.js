// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true,
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }
  ]
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './**/site.js']
});
const postcss-critical-split = require('postcss-critical-split')({ 
  'criticalSplit.config.js'
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano, postcss-critical-split] : [])
  ],
};
