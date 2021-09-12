# Node Package Manager
**Altering this file causes the npm workflow to run**

Create package.json - run: npm init -y

## DEVELOPMENT
Install packages
~~~bash
run: npm install --save-dev postcss postcss-cli autoprefixer
~~~

Jekyll-deploy 
~~~bash
run: npm install
~~~

Installed dev:
  - postcss
  - postcss-cli
  - autoprefixer

## PRODUCTION
Install packages
~~~bash
run: npm install --save-prod @fullhuman/postcss-purgecss postcss postcss-cli autoprefixer cssnano
~~~

Jekyll-deploy
~~~bash
run: npm install --production
~~~

Installed:
  - postcss
  - postcss-cli
  - autoprefixer
  - cssnano
  - purgecss (@fullhuman/postcss-purgecss)
