const Encore = require('@symfony/webpack-encore');
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const path = require('path');

const layoutCssPath = './assets/styles/layout.css';
const homepageCssPath = './assets/styles/homepage.css';
class StylifyPlugin {
	apply(compiler) {
        nativePreset.compiler.injectVariablesIntoCss = false;
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		const bundler = new Bundler({
			compilerConfig: nativePreset.compiler,
            cssVarsDirPath: './assets/styles',
			watchFiles: compiler.options.watch || false
		});

		bundler.bundle([
			{
				outputFile: layoutCssPath,
				files: ['./templates/base.html.twig']
			},
            {
                outputFile: homepageCssPath,
                files: ['./templates/homepage/homepage.html.twig']
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

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .addPlugin(new StylifyPlugin())
    .addStyleEntry('layout', [
        './assets/styles/stylify-variables.css',
        layoutCssPath
    ])
    .addStyleEntry('homepage', homepageCssPath)

    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableStimulusBridge('./assets/controllers.json')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    });

module.exports = Encore.getWebpackConfig();