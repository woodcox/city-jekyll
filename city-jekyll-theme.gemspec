# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "city-jekyll-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["woodcox"]
  spec.email         = ["64870518+woodcox@users.noreply.github.com"]

  spec.summary       = "City-Jekyll theme and style guide for a fast, sass-y responsive website with postcss superpowers."
  spec.homepage      = "https://woodcox.github.io/city-jekyll/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|LICENSE|README|404|_data|index|robot|sitemap)}i) }

  spec.metadata      = {
    "changelog_uri"     => "https://woodcox.github.io/city-jekyll/updates/",
    "documentation_uri" => "https://github.com/woodcox/city-jekyll#readme"
  }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-remote-theme"
  spec.add_runtime_dependency "jekyll-get-json"
  spec.add_runtime_dependency "jekyll-liquify"
  spec.add_runtime_dependency "jekyll-redirect-from"
  spec.add_runtime_dependency "jekyll-postcss-v2"

  spec.add_development_dependency "bundler", ">= 1.16"
end
