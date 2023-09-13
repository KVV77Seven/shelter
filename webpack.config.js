const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'jsSrc', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
        clean: true
    },
    resolve: {
        alias: {
            'shelter': path.resolve(__dirname)
        }
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'index.html'),
            filename: "index.html"
        }),
    ],
};