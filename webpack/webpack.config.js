
const path = require('path');
const { stylifyWebpack } = require('@stylify/unplugin');

const mode = 'development';

module.exports = {
	entry: './input.js',
	mode: mode,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
		],
	},
	plugins: [
		stylifyWebpack({
			bundles: [
				{
					outputFile: './index.css',
					files: ['./index.html'],
					rewriteSelectorsInFiles: mode === 'production'
				}
			],
			compiler: {
				variables: {
					blue: 'steelblue'
				}
			}
		})
	],
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
		libraryTarget: 'umd'
	}
};
