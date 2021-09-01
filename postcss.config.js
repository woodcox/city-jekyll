// postcss.config.js

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require("cssnano"), // example of plugin you might use
    ...(process.env.JEKYLL_ENV == "production" // example of only using a plugin in production
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
