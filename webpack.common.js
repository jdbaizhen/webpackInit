const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    module: {
        rules: [
            {
                test: '/\.jsx?$/',
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: '/\.(svg|png|jpg|jpeg|gif)$/',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            filename: 'index.html',
            template: `./index.html`
        }),
        //自动加载模块，无需到处import/require
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
        })
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};