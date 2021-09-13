# Node Package Manager
**Altering this file causes the npm workflow to run**

To create package.json using the npm-update github action.
~~~bash
run: npm init -y
~~~

## DEVELOPMENT
Install packages
~~~bash
run: npm install -D
~~~

Installed dev:
  - postcss
  - postcss-cli
  - autoprefixer
  - cssnano
  - purgecss (@fullhuman/postcss-purgecss)

## PRODUCTION
Jekyll-deploy
~~~bash
run: npm ci
~~~

In the Jekyll-Depoly .github/workflow - For production builds the NODE_ENV needs changing from "development" to "production". This will minify the css using cssnano and purgecss. The configuration is in the postcss.config.js file.
~~~yml
env:
  NODE_ENV="production"
~~~
