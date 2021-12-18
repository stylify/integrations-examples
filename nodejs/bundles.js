const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

nativePreset.compiler.variables = {
	blue: 'steelblue'
}

const bundler = new Bundler({
	compilerConfig: nativePreset.compiler,
	watchFiles: false
});

bundler.bundle([
	{
		files: ['./index.html'],
		outputFile: './index.css'
	}
]);
