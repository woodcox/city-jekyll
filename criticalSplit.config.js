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
        'from': 'assets/css/city.css',
        'to': 'assets/css/critical.css'
    })
    .then(function(result) {
        saveCssFile("assets/css/critical.css", result);
        console.log('file saved');
    });

console.log(criticalSplit.output_types.INPUT_CSS);
