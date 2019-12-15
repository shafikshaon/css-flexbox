var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, dir)
}

// Directory for deployed assets. It should be within our static files path.
// Backslash at the end is not required.
var moduleUrl = '/dist/';
var dist_dir = moduleUrl;
var pluginsList = [];
if (process.env.NODE_ENV === 'production') {
    pluginsList.push(
        // new MinifyPlugin(),
        new VueLoaderPlugin(),
    )
} else {
    pluginsList.push(
        // new MinifyPlugin(),
        new VueLoaderPlugin(),
    )
}
var entryFile = {};
entryFile = {
    'app': './main.js',
};
module.exports = {
    entry: entryFile,
    output: {
        path: path.resolve(__dirname, '.' + dist_dir + '/'),
        filename: '[name].bundle.js'
    },
    plugins: pluginsList,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.module\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        loader: 'vue-loader'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /^(?!.*?\.module).*\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.module\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[name].[ext]?[hash]'}
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
    },
};