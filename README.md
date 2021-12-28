# 🏬 City-Jekyll

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Please note this is a work in progress. The theme has not been created yet. This is what I am working towards.**

Welcome to the **city-jekyll** theme! This is the theme for [City Evangelical Church](https://cecleeds.co.uk) website. It's built using [Jekyll](https://jekyllrb.com/), some clever [Github Actions](https://github.com/features/actions), [NPM](https://www.npmjs.com/) and [Primitive UI](https://taniarascia.github.io/primitive). The theme is a design toolkit for developing fast [sass-y](https://sass-lang.com/), responsive websites with browser-consistent styling and [postcss](https://postcss.org/) superpowers.

Demo available: [here](http://woodcock3.github.io/city-jekyll/)

## Primitive UI

[![primitive-ui on NPM](https://img.shields.io/npm/v/primitive-ui.svg?color=green&label=primitive-ui)](https://www.npmjs.com/package/primitive-ui)

The original [primitive UI](https://taniarascia.github.io/primitive) and it's [documentation](https://taniarascia.github.io/primitive) is available as a boilerplate/primitive framework for any project and its awesome. The beauty of Primitive is the ease with which you can create unique designs in a beautiful, simple system.

https://github.com/taniarascia/primitive.git


## Installation (not ready yet)

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "city-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: city-jekyll-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install city-jekyll-theme


> Since [November 2017](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/) you can use this theme by adding: `remote_theme: woodcock3/city-jekyll` to your `_config.yml` file.


## Usage

### Project tree:
```
City-jekyll
│
├─── _data
|      ├─── contacts.yml
|      ├─── cookies-used.yml
|      └─── nav.yml
│  
├─── _includes
│      ├─── components
│      │     ├─── accent-accordion.html
│      │     ├─── accordion.html
│      │     ├─── action-cards.html
│      │     ├─── analytics.js
│      │     ├─── audio-cards.html
│      │     ├─── calendar.html
│      │     ├─── contact-button.html
│      │     ├─── flip-cards.html
│      │     ├─── image-cards.html
│      │     ├─── impact-font.html
│      │     ├─── lazy-images.html
│      │     ├─── muted-accordion.html
│      │     ├─── profile-cards.html
│      │     ├─── round-accordion.html
│      │     ├─── sermons-list.html
│      │     ├─── square-accordion.html
│      │     ├─── srcset-images.html
│      │     ├─── table.html
│      │     ├─── video-cards.html
│      │     └─── youtube-video.html
│      │
|      ├─── modules
│      │     ├─── breadcrumbs.html
│      │     ├─── cookies-consent.html
│      │     ├─── nav-back.html
│      │     ├─── preloader.html
│      │     ├─── scroll-up.html
│      │     └─── search_lunr.html
│      │
|      ├─── svg
│      │     ├─── cec-building-curved.svg
│      │     ├─── city-vector.svg
│      │     └─── fiec.svg
│      │
|      └─── templates
│            ├─── docs-hero.html
│            ├─── footer.html
│            ├─── head.html
│            ├─── hero.html
│            ├─── navbar.html
│            ├─── page-hero.html
│            └─── secondary-nav.html
│  
├─── _layouts
│      ├─── compress.html
│      ├─── default.html
│      ├─── docs-layout.html
│      ├─── home.html
│      ├─── sectioned-page.html
│      └─── single-page.html
│
├─── _plugins
│      └─── inline-sass.rb
│
├─── _sass
│      ├─── base
│      │     ├─── _mixins.scss
│      │     ├─── _normalize.scss
│      │     ├─── _reset.scss
│      │     └─── _variables.scss
│      │
│      ├─── components
│      │      ├─── _accordion.scss
│      │      ├─── _animation.scss
│      │      ├─── _buttons.scss
│      │      ├─── _cards.scss
│      │      ├─── _colors.scss
│      │      ├─── _forms.scss
│      │      ├─── _media.scss
│      │      ├─── _slider.scss
│      │      ├─── _tables.scss
│      │      └─── _timeline.scss
│      │
│      ├─── core
│      │      ├─── _grid.scss
│      │      ├─── _helpers.scss
│      │      └─── _scaffolding.scss
│      │
│      ├─── fonts
│      │      ├─── _fontawesomesvg.scss
│      │      ├─── _syntax-highlight.scss
│      │      └─── _webfonts.scss
│      │
│      └─── layouts
│             ├─── _footer.scss
│             ├─── _hero.scss
│             └─── _navigation.scss
│
├─── assets
│    │
│    ├─── css
│    │    └─── city.scss
│    ├─── img
│    │    ├─── 1000
│    │    ├─── 1160
│    │    ├─── 400
│    │    ├─── 600
│    │    ├─── 800
│    │    ├─── faicons
│    │    └─── master
│    ├─── js
│    │    ├─── contacts.js
│    │    ├─── site.js
│    │    ├─── smoothscroll-polyfill.js
│    │    └─── snap-slider.min.js
│    └─── webfonts
│         ├─── icons
│         └─── sanchez
│
├─── pages
│      ├─── _docs
│      ├─── _drafts
│      ├─── _home
│      ├─── _media
│      ├─── _posts
│      ├─── _sunday
|      ├─── cookies.md
│      ├─── html-test.html
│      ├─── primitive.html
│      ├─── privacy.md
│      ├─── safeguarding.md
│      ├─── template.html
│      └─── we-beleive.md
│ 
├─── .browserslistrc
├─── .gitignore
├─── 404.md
├─── gemfile
├─── gemfile.lock
├─── LICENCE.md
├─── README.md
├─── SECURITY.md
├─── _config.yml
├─── browserconfig.xml
├─── city-jekyll-theme.gemspec
├─── index.md
├─── npm.md
├─── package-lock.json
├─── package.json
├─── postcss.config.js
├─── robot.txt
├─── site.webmanifest
└─── sitemap.xml
```

Now you can begin modifying variables in `variables.scss`. This file will define your colors, typography, sizes, breakpoints, buttons, borders, and more. Define all your variables here to keep your project organized.

You can view `city-jekyll/docs/html-test/` or `city-jekyll/docs/` to see some example elements as you make changes.

This gem offers some *main* layouts that can be used/edited:
- The `_layouts/default.html`, is the skeleton of the pages, where header,footer, assets are called. It should be used in most of the other layouts,
- The `_layouts/home.html` is the main layout the will be your home, where your blog posts will be shown;
- The `_layouts/post.html` is the layout used to present the blog posts themselves, where they will be rendered.

Inside the `_includes/` directory there are the partials that are used inside the layouts.

To edit the current JavaScript functions of the gem, the file you are looking for is in `assets/js/site.js`.

Your blog posts (`*.md` files) should be put in the `_posts` directory.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/woodcock3/city-jekyll. This project is welcomes collaboration, but contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## Credits

This theme was inspired by: 
  - [Tania Rascia](https://www.taniarascia.com) and her [Primitive UI](https://taniarascia.github.io/primitive)
  - [Tim O'Brien](http://t413.com) for creating [SinglePaged](http://github.io/t413/SinglePaged) jekyll site
  - [Dave Gamache](http://davegamache.com) for building [Skeleton CSS](http://getskeleton.com/)


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT). However the following directory and its content is copyright of City Evangelical Church. You may not reuse anything therein without the church's written permission:

    /assets/img


