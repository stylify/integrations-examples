const mix = require('laravel-mix');
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
				outputFile: './resources/css/homepage.css',
				files: ['./resources/views/welcome.blade.php']
			}
		]);

		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
	}
};


mix
    .webpackConfig({
        plugins: [new StylifyPlugin()]
    })
    .postCss('resources/css/homepage.css', 'public/css', [
        //
    ]);
