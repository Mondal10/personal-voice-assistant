const path = require('path');

// Used to generate HTML5 file that includes all webpack bundles in script tag.
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    },

    module: {
        rules: [
            {
                // Rule for CSS
                test: /\.css$/,
                use: [
                    'style-loader', // 2. Injects styles into DOM
                    'css-loader' // 1. Turns CSS into commonJS
                ]
            }
        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" // Pass the path of index file which act as template
        })
    ]
});

// Exporting the config.
module.exports = config;