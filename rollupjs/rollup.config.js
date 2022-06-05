const { rollupPlugin } = require('@stylify/unplugin');
const postcss = require('rollup-plugin-postcss');

const stylifyPlugin = rollupPlugin({
	dev: true,
	transformIncludeFilter: (id) => id.endsWith('html'),
	bundles: [{
		files: ['./index.html'],
		outputFile: './index.css'
	}],
	extend: {
		bundler: {
			compiler: {
				variables: {
					blue: 'steelblue'
				}
			}
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
