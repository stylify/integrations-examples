import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
    transformIncludeFilter: (id) => {
		console.log(id);
		return id.endsWith('js') || id.endsWith('ts') || id.endsWith('tsx') || id.endsWith('jsx');
	},
    bundles: [{
        outputFile: './src/stylify.css',
        files: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
    }],
    extend: {
        bundler: {
            compiler: {
                selectorsAreas: [
                    '(?:^|\\s+)className="([^"]+)"',
                    '(?:^|\\s+)className=\'([^\']+)\'',
                    '(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
                ]
            }
        }
    }
});

export default defineConfig({
	server: {
		host: '0.0.0.0'
	},
	plugins: [stylifyPlugin, react()]
});
