const path = require('path');

// Used to generate HTML5 file that includes all webpack bundles in script tag.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Clean dist folder's previous content (Used in prod only as dev dist is in memory and will do cleaning on its own)
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Minify CSS only in production.
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Minify JS (just requiring it as it was already present but got overwritten by optimization minimizer)
const TerserPlugin = require('terser-webpack-plugin');

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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[contentHash].css' // contentHash is used for cache busting
        })
    ],

    // By adding optimization -> minimizer, the default JS minifier in `mode:'production'` gets overwritten
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html", // Pass the path of index file which act as template
                minify: { // Minifying HTML
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },

    module: {
        rules: [
            {
                // Rule for CSS
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 2. Extract CSS into files
                    'css-loader' // 1. Turns CSS into commonJS
                ]
            }
        ]
    }
});

// Exporting the config.
module.exports = config;