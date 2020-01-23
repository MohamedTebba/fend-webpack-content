const path = require('path')
const webpack = require('webpack')


/**
 * So now we come to the first concept - the Webpack entry point. Webpack broke at the last step because it didn’t have an entry point.

Webpack is going to make a map of our app assets and all of their dependencies, but it needs somewhere to start. The default location for the webpack entry point is ./src/index.js - but because we are already set up with express and have a slightly different file structure, that file doesn't exist! Instead, we need to tell webpack to use a custom entry point. For us, that will be:

’./src/client/index.js’
 */
module.exports = {
    entry : './src/client/index.js'
}