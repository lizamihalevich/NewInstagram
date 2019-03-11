const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let conf = {
    entry: {
        main: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index.jsx',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader', 'eslint-loader']
            },

            {
                test: /\.pcss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true,
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    context: path.resolve(__dirname, './src/'),
    resolve: {
        modules: ['./src/', 'node_modules'],
        extensions: ['.js', '.jsx', '.pcss'],
    },
}

module.exports = conf;