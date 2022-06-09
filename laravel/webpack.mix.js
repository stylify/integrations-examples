const mix = require('laravel-mix');
const { webpackPlugin } = require('@stylify/unplugin');
const path = require('path');

const stylifyPlugin = webpackPlugin({
	transformIncludeFilter: (id) => id.endsWith('php'),
	bundles: [
        { outputFile: './resources/css/homepage.css', files: ['./resources/views/welcome.blade.php'] }
    ],
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


mix
    .webpackConfig({ plugins: [stylifyPlugin] })
    .postCss('resources/css/homepage.css', 'public/css');
