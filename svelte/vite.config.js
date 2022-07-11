import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePlugin } from '@stylify/unplugin'

const stylifyPlugin = vitePlugin({
		transformIncludeFilter: (id) => {
		return id.endsWith('svelte');
	},
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.svelte'],
	}]
});

export default defineConfig({
	server: {
		host: '0.0.0.0'
	},
	plugins: [stylifyPlugin, svelte()]
})
