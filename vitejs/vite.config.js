import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  nativePreset.compiler.variables = {
    blue: 'steelblue'
  };

  const bundler = new Bundler({
    compiler: nativePreset.compiler,
    watchFiles: mode === 'development'
  });

  const bundle = async () => {
    bundler.bundle([
      {
        files: ['./src/**/*.vue'],
        outputFile: './src/assets/stylify.css'
      }
    ]);
    return bundler.waitOnBundlesProcessed();
  };

  const stylifyBundlerPlugin = () => {
    return {
      name: 'stylify',
      options: bundle
    }
  };

  return {
    plugins: [vue(), stylifyBundlerPlugin()]
  }
})
