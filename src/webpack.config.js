const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './index.jsx',
        ],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    context: path.resolve(__dirname, './'),

    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader', 'eslint-loader'],
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
            },
        ],
    },
    resolve: {
        modules: ['./', 'node_modules'],
        extensions: ['.js', '.jsx', '.pcss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
