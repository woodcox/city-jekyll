# Node Package Manager
Altering this file causes the npm workflow to run

Create package.json - run: npm init -y

## DEVELOPMENT
Install packages
run: npm install --save-dev postcss postcss-cli autoprefixer

Jekyll-deploy 
run: npm install

Installed dev:
  - postcss
  - postcss-cli
  - autoprefixer

## PRODUCTION
Install packages
run: npm install --save-prod @fullhuman/postcss-purgecss postcss postcss-cli autoprefixer cssnano

Jekyll-deploy 
run: npm install --production

Installed:
  - postcss
  - postcss-cli
  - autoprefixer
  - cssnano
  - purgecss (@fullhuman/postcss-purgecss)
