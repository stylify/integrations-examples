const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

const watchFiles = process.argv[process.argv.length - 1] === '--w';

nativePreset.compiler.components = {
	container: 'max-width:1024px margin:0__auto'
}

nativePreset.compiler.mangleSelectors = !watchFiles;

const bundler = new Bundler({
	compiler: nativePreset.compiler,
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
