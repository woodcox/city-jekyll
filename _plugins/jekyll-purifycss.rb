# This hook runs PurifyCSS (if configured) after everything was build.
# Settings in _conf.yml:
# purify: 
#   compress: <true, false> [If output css should be minified]
#   force class: <array of css classes> [If purify falsly removes css classes, you can force them to be included by putting them here]
# To disable set purify: false

# Additionally the hook removes unnecessary css, js and json files (starting with '_' in the asset folder) if clean: true in _conf.yml

Jekyll::Hooks.register :site, :post_write do |site|
    if site.config["purify"]  
        html = ""
        Dir.glob("#{site.dest}/**/*.html") do |file|
            html << file << " "
        end
        css = Dir.glob("#{site.dest}/**/*.css").select{ |f| !File.basename(f).start_with?("_")}.sort_by{ |f| File.mtime(f) }.last
        js = Dir.glob("#{site.dest}/**/*.js").select{ |f| !File.basename(f).start_with?("_")}.sort_by{ |f| File.mtime(f) }.last

        force_class = ""
        if site.config["purify"]["force_class"]
            force_class = %q['<div class="]
            site.config["purify"]["force_class"].each do |f_class|
                force_class << f_class << " "
            end
            force_class << %q["></div>']
        end
        
        compress = ""
        if site.config["purify"]["compress"]
            compress = "-m"
        end

        Jekyll.logger.info %x[purifycss #{css} #{js} #{html} #{force_class} #{compress} --info --out #{css}]
    end

    if site.config["clean"]
        css = Dir.glob("#{site.dest}/**/*.css").select{ |f| File.basename(f).start_with?("_")}
        css.each do |file|
            Jekyll.logger.warn "Removing " << file
            File.delete(file)
        end

        js = Dir.glob("#{site.dest}/**/*.js").select{ |f| File.basename(f).start_with?("_")}
        js.each do |file|
            Jekyll.logger.warn "Removing " << file
            File.delete(file)
        end

        Dir.glob("#{site.dest}/**/*.json").each do |file|
            Jekyll.logger.warn "Removing " << file
            File.delete(file)
        end
    end
end
