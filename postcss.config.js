// postcss.config.js

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require("autoprefixer") // example of plugin you might use
    ...(process.env.JEKYLL_ENV == "production" // example of only using a plugin in production
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
