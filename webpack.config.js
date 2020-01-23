const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')


/**
 * So now we come to the first concept - the Webpack entry point. Webpack broke at the last step because it didn’t have an entry point.

Webpack is going to make a map of our app assets and all of their dependencies, but it needs somewhere to start. The default location for the webpack entry point is ./src/index.js - but because we are already set up with express and have a slightly different file structure, that file doesn't exist! Instead, we need to tell webpack to use a custom entry point. For us, that will be:

’./src/client/index.js’
 */


/**babel command line:
  * 
  * npm i -D @babel/core @babel/preset-env babel-loader
  */

/**
 * Loaders transform files type to what webpack would understand, plugins do what else loaders can't do
 *  */  
module.exports = {
    entry : './src/client/index.js',
    module: {
        rules: [
            //first rule goes here, test all js files expect those exist in node_modules, with a loader "babel-loader"
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
}