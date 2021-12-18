const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

class StylifyPlugin {
  constructor(options) {
    this.options = {
      ...{
        isDev: false,
      },
      ...options
    }
  }
	apply(compiler) {
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		const bundler = new Bundler({
			compilerConfig: nativePreset.compiler,
			watchFiles: this.options.isDev
		});

		bundler.bundle([
			{
				outputFile: './styles/stylify.css',
				files: ['./pages/**/*.js']
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
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(new StylifyPlugin({ isDev: dev }));
    return config;
  }
}
