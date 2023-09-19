const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname,'jsSrc', 'index.js'),
        ourPets: path.resolve(__dirname,'jsSrc', 'ourPets.js'),
    },
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
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",

            },
            {
                test: /\?.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]'
                }
            },
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'index.html'),
            filename: "index.html",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'ourPets.html'),
            filename: "ourPets.html",
            chunks: ['ourPets'],
        }),
    ],
};