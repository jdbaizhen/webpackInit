const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
     module: {
    //     rules: [
    //         {
    //             test: '/\.less$/',
    //             use: ExtractTextPlugin.extract({
    //                 fallback: 'style-loader',
    //                 use: ['css-loader', 'less-loader']
    //             })
    //         }
    //     ]
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
     },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //new ExtractTextPlugin("[name].css")
    ]
})