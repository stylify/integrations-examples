import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin =	vitePlugin({
	transformIncludeFilter: (id) => id.endsWith('vue'),
	bundles: [{
		files: ['./src/**/*.vue'],
		outputFile: './src/assets/stylify.css'
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

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  return {
    server: {
      host: '0.0.0.0'
    },
    plugins: [stylifyPlugin, vue()]
  }
});
