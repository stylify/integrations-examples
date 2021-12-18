export default {
	// 1. Add stylify build module
	buildModules: [
		'@stylify/nuxt-module'
	],

	// 2. Optional. Add configuration. You can also use stylify.config.js
	stylify: {
		extend: {
			compiler: {
				variables: {
					blue: 'steelblue',
					paragraphFontSize: '24px'
				}
			}
		}
	},

	server: {
		host: '0.0.0.0'
	},

	head: {
		title: 'example',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		]
	},

	components: true,

}
