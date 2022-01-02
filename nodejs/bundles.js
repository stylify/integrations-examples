const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

const watchFiles = process.argv[process.argv.length - 1] === '--w';

nativePreset.compiler.variables = {
	blue: 'steelblue'
}

const bundler = new Bundler({
	compiler: nativePreset.compiler,
	watchFiles: watchFiles
});

bundler.bundle([
	{
		files: ['./index.html'],
		outputFile: './index.css'
	}
]);
