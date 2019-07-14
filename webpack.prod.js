// Webpack uses this to work with directories
// const webpack = require('webpack');

const path = require('path');

// Clean dist folder's previous content (Used in prod only as dev dist is in memory and will do cleaning on its own)
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Requiring the common webpack config.
const common = require('./webpack.common');
const merge = require('webpack-merge');

// This is our Configuration object.
// Here we write different options and tell Webpack what to do, keys are predefined in Webpack
const config = merge(common, {

    // Default mode of Webpack is production.
    // Depending on mode Webpack will apply different things on final bundle 
    // (eg. minification and uglify in production mode).
    mode: 'production',

    // Path and filename of our result bundle.
    // Webpack will bundle all Javascript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[contentHash].js' // contentHash is used for cache busting
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
});

// Exporting the config.
module.exports = config;