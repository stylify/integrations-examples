const { Bundler } = require('@stylify/bundler');

const watchFiles = process.argv[process.argv.length - 1] === '--w';

const bundler = new Bundler({
	watchFiles: watchFiles,
	compiler: {
		mangleSelectors: !watchFiles,
		components: {
			container: 'max-width:1024px margin:0_auto'
		}
	},
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
