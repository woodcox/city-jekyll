const postcss = require('postcss'),
	criticalSplit = require('postcss-critical-split'),
	css = '',
	fs = require('fs');

function saveCssFile(filepath, cssRoot) {
    console.log('saving');
    fs.writeFileSync(filepath, cssRoot.css);

}

css = fs.readFileSync('assets/css/city.css');

postcss(criticalSplit({
		'output': criticalSplit.output_types.CRITICAL_CSS
	}))
    .process(css, {
        'from': './build/css/city.css',
        'to': './build/css/critical.css'
    })
    .then(function(result) {
        saveCssFile("./build/css/critical.css", result);
        console.log('file saved');
    });

console.log(criticalSplit.output_types.INPUT_CSS);
