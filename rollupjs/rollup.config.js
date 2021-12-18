const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const postcss = require('rollup-plugin-postcss');

nativePreset.compiler.variables = {
	blue: 'stelblue'
};

const bundler = new Bundler({
	compilerConfig: nativePreset.compiler,
	watchFiles: process.env.ROLLUP_WATCH || false
});

const bundle = async () => {
	bundler.bundle([
		{
			files: ['./index.html'],
			outputFile: './index.css'
		}
	]);
	return bundler.waitOnBundlesProcessed();
};

const stylifyBundlerPlugin = () => {
	return {
		name: 'stylify',
		options: bundle
	}
};

export default {
  input: 'input.js',
  plugins: [
	stylifyBundlerPlugin(),
	postcss()
  ],
  output: {
    file: 'index.js',
    format: 'umd',
  }
};
