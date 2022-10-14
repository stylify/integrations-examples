const { Bundler } = require('@stylify/bundler');

const isDev = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
    watchFiles: isDev,
    // Optional
    compiler: {
        mangleSelectors: !isDev,
        // https://stylifycss.com/docs/stylify/compiler#variables
        variables: {},
        // https://stylifycss.com/docs/stylify/compiler#macros
        macros: {},
        // https://stylifycss.com/docs/stylify/compiler#components
        components: {},
        // ...
    }
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link bellow
bundler.bundle([
  { files: ['./templates/**/*.php', './src/**/*.php'], outputFile: './webroot/css/stylify.css' },
]);
