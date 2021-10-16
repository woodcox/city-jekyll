---
title: "Get Started"
collection_type: "docs"
layout: docs-layout
container-size: medium
heading: 2
sitemap: true
---

To begin, use the head template (_include/templates/head.html) to create a <a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a> template that does the following:

- Sets the <a href="http://www.w3schools.com/tags/ref_language_codes.asp" target="_blank">default language</a> and <a href="https://en.wikipedia.org/wiki/UTF-8">character set</a>.
- Uses the latest <a href="https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx">Internet Explorer rendering mode</a>.
- Defines the <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag">width of the viewport</a> to enable responsiveness.
- Includes links to the main.css file and the city-jekyll Favicon. The footer template links to site.js file.

~~~ html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title></title>

  <link rel="stylesheet" href="css/main.css">
  <link rel="icon" href="images/favicon.png">
</head>

<body></body>

</html>
~~~

View all HTML5 with Primitive CSS applied to them. 

<a href="{{ '/docs/html-test/' | relative_url }}" class="button">HTML5 Elements Test</a>
