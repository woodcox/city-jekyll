# frozen_string_literal: true

require "pathname"

module PostHtml
  class Engine
    def initialize(source)
      @script = Pathname.new(source + "/node_modules/.bin/posthtml")
      unless @script.exist?
        Jekyll.logger.error "PostHTML:",
                            "PostHTML not found.
                             Make sure posthtml and posthtml-cli
                             are installed in your Jekyll source."
        Jekyll.logger.error "PostHTML:",
                            "Couldn't find #{@script}"
        exit 1
      end

      @config = Pathname.new(source + "/posthtml.config.js")
      unless @config.exist?
        Jekyll.logger.error "PostHTML:",
                            "posthtml.config.js not found.
                             Make sure it exists in your Jekyll source."
        Jekyll.logger.error "PostHTML:",
                            "Couldn't find #{@config}"
        exit 1
      end
    end

    def process(page)
      file_path = Pathname.new(page.site.dest + page.url)
      posthtml_command = `#{@script} #{file_path} -r --config #{@config}`
      Jekyll.logger.info "PostHTML:",
                         "Rewrote #{page.url} #{posthtml_command}"
    end
  end
end

Jekyll::Hooks.register :pages, :post_write do |page|
  if %r!\.html$! =~ page.url
    engine = PostHTML::Engine.new(page.site.source)
    engine.process(page)
  end
end
