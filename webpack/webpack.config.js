// FS
const path = require('path');
// PLUGINS
const autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const isDevelopment = ENVIRONMENT === 'development';

module.exports = {
    mode: ENVIRONMENT,
    entry: [
        // path.resolve(__dirname, 'polyfills'),
        path.resolve('src', 'index')
    ],
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[hash].js',
        path: path.resolve('dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            eslintPath: require.resolve('eslint'),
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    { loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer]
                        }
                    },
                    { loader: 'sass-loader' },
                ]
            }
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve('public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '/static/css/[name].[hash].css',
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.resolve('dist'),
    },
};
