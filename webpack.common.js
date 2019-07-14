const path = require('path');

// This is our Configuration object.
// Here we write different options and tell Webpack what to do, keys are predefined in Webpack
const config = {

    // Path to our entry point. From this file Webpack will begin his work
    entry: './src/javascript/index.js',

    // Bundling of output file takes place as per the environment (Dev or Prod)

    // Rules for all loaders used are defined here
    // We will be using babel, css 
    module: {
        rules: [
            {
                // Rule for Babel
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

// Exporting the config.
module.exports = config;