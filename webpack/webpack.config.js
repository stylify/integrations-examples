
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const path = require('path');

class StylifyPlugin {
	apply(compiler) {
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		const bundler = new Bundler({
			compiler: nativePreset.compiler,
			watchFiles: compiler.options.watch || false
		});

		bundler.bundle([
			{
				outputFile: './index.css',
				files: ['./index.html']
			}
		]);

		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
	}
}

module.exports = {
	entry: './input.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
		],
	},
	plugins: [
		new StylifyPlugin(),
	],
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
		libraryTarget: 'umd'
	}
};
