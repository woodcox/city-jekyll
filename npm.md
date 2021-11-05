# Node Package Manager
**Altering this file causes the npm workflow to run**

To create package.json use the npm-update github action.
~~~yml
run: npm init -y
~~~

## DEVELOPMENT
Install/update/uninstall packages
~~~yml
run: npm install -D @fullhuman/postcss-purgecss postcss postcss-cli autoprefixer cssnano
run: npm update # update minor version
run: npm uninstall 

~~~

Installed dev:
  - postcss
  - postcss-cli
  - autoprefixer
  - cssnano
  - purgecss (@fullhuman/postcss-purgecss)

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
