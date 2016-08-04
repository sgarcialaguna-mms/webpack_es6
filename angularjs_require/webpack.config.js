/* jshint node:true */

var path = require('path');
var BundleTracker = require('webpack-bundle-tracker')

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
        loaders: [
            {
                test: require.resolve('angular'),
                loader: 'exports?angular'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    devtool: 'eval'
};
