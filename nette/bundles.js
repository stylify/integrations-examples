const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

const watchFiles = process.argv[process.argv.length - 1] === '--w';

nativePreset.compiler.variables = {
	blue: 'steelblue'
}

const bundler = new Bundler({
	compilerConfig: nativePreset.compiler,
	watchFiles: watchFiles
});

bundler.bundle([
	{
		files: ['./app/Presenters/templates/@layout.latte'],
		outputFile: './www/static/css/layout.css'
	},
	{
		files: ['./app/Presenters/templates/Homepage/default.latte'],
		outputFile: './www/static/css/homepage.css'
	}
]);
