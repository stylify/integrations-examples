import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: '3001'
    },
    plugins: [
        stylifyVite({
            bundles: [
                { files: ['resources/views/**/*.blade.php'], outputFile: 'resources/css/stylify.css' }
            ]
        }),
        laravel({
            input: ['resources/css/stylify.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
