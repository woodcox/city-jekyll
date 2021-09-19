# Node Package Manager
**Altering this file causes the npm workflow to run**

To create package.json use the npm-update github action.
~~~yml
run: npm init -y
~~~

## DEVELOPMENT
Install packages
~~~yml
run: npm install -D
~~~

Installed dev:
  - postcss
  - postcss-cli
  - autoprefixer
  - cssnano
  - cssnano-preset-advanced
  - purgecss (@fullhuman/postcss-purgecss)
  - postcss-critical-split
  - merge

## PRODUCTION
Jekyll-deploy GitHub action
~~~yml
run: npm ci
~~~

For production builds the NODE_ENV needs changing from "development" to "production". 
This will minify the css using cssnano and purgecss. 
The configuration is in the postcss.config.js file.
~~~yml
env:
  NODE_ENV: "production"
~~~
