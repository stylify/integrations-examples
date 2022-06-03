const { webpackPlugin } = require('@stylify/unplugin');

const stylifyPlugin = (dev) => webpackPlugin({
	dev: dev,
	transformIncludeFilter: (id) => id.endsWith('js'),
	bundles: [{
		outputFile: './styles/stylify.css',
		files: ['./pages/**/*.js'],
	}],
	extend: {
		bundler: {
			compiler: {
				variables: {
					blue: 'steelblue'
				},
				selectorsAreas: [
					'(?:^|\\s+)className="([^"]+)"',
					'(?:^|\\s+)className=\'([^\']+)\'',
					'(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
				]
			}
		}
	}
});

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.unshift(stylifyPlugin(dev));
    return config;
  }
}
