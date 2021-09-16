// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    colormin: true,
    convertValues: true,
    cssDeclarationSorter: true,
    discardComments: { removeAll: true },
    discardDuplicates: true,
    discardEmpty: true,
    discardOverridden: true,
    mergeLonghand: true,
    mergeRules: true,
    minifyFontValues: true,
    minifySelectors: true,
    uniqueSelectors: true,
    svgo: true,
};
const cssnano = require('cssnano')({
  preset: ['default', cssnanoConfig],
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './**/site.js']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ],
};
