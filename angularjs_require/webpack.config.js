/* jshint node:true */

var path = require('path');

module.exports = {
    context: path.join(__dirname, 'js'),

    entry: './app.js',

    output: {
        path: path.join(__dirname, 'js', 'bundles'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/bundles/'
    },

    resolve: {
        root: [path.join(__dirname, 'js')]
    },
    
    module: {
        loaders: [{
            test: require.resolve('angular'),
            loader: 'exports?angular'
        }]
    },

    devtool: 'eval'
};