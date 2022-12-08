const { stylifyRollup } = require('@stylify/unplugin');
const postcss = require('rollup-plugin-postcss');

const stylifyPlugin = stylifyRollup({
	dev: true,
	bundles: [{
		files: ['./index.html'],
		outputFile: './index.css'
	}],
	compiler: {
		variables: {
			blue: 'steelblue'
		}
	}
});

export default {
	input: 'input.js',
	plugins: [stylifyPlugin, postcss()],
	output: {
		file: 'index.js',
		format: 'umd',
	}
};
