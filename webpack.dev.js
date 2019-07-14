// Webpack uses this to work with directories
// const webpack = require('webpack');

const path = require('path');

// Requiring the common webpack config.
const common = require('./webpack.common');
const merge = require('webpack-merge');

// This is our Configuration object.
// Here we write different options and tell Webpack what to do, keys are predefined in Webpack
const config = merge(common, {

    // Default mode of Webpack is production.
    // Depending on mode Webpack will apply different things on final bundle 
    // (eg. minification and uglify in production mode).
    mode: 'development',

    // Setting development server
    devServer: {
        inline: true,
        port: 3000,
        hot: true
    },

    // Path and filename of our result bundle.
    // Webpack will bundle all Javascript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // contentHash is not used here in dev mode.
    }
});

// Exporting the config.
module.exports = config;