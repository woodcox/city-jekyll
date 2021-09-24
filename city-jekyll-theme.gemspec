# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "city-jekyll-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["woodcock3"]
  spec.email         = ["64870518+woodcock3@users.noreply.github.com"]

  spec.summary       = "City-Jekyll theme and style guide for a fast, sass-y responsive website with postcss superpowers."
  spec.homepage      = "https://woodcock3.github.io/city-jekyll/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|LICENSE|README|404|_data|index|package|package-lock|postcss.config|robot|sitemap)}i) }

  spec.metadata      = {
    "changelog_uri"     => "https://woodcock3.github.io/city-jekyll/updates/",
    "documentation_uri" => "https://github.com/woodcock3/city-jekyll#readme"
  }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-get-json"
  spec.add_runtime_dependency "jekyll-liquify"
  spec.add_runtime_dependency "jekyll-redirect-from"
  spec.add_runtime_dependency "jekyll-postcss-v2"

  spec.add_development_dependency "bundler", ">= 1.16"
end
