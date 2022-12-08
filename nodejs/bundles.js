const { Bundler } = require('@stylify/bundler');

const bundler = new Bundler({
	compiler: {
		blue: 'steelblue'
	},
	watchFiles: process.argv[process.argv.length - 1] === '--w'
});

bundler.bundle([
	{
		files: ['./index.html'],
		outputFile: './index.css'
	}
]);
