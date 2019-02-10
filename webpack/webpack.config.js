// FS
const path = require('path');
// PACKAGES
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const IS_DEV = ENVIRONMENT === 'development';

const styleLoader = IS_DEV
    ? { loader: 'style-loader' }
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '/'
        }
    };

const plugins = !IS_DEV ? [ new CleanWebpackPlugin(['../dist/'], { allowExternal: true })] : [];

module.exports = {
    mode: ENVIRONMENT,
    entry: [
        path.resolve(__dirname, 'polyfills'),
        path.resolve('src', 'index')
    ],
    output: {
        filename: IS_DEV ? '[name].js' : '[name].[hash].js',
        path: path.resolve('dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            components: path.resolve('src', 'components')
        },
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
                    styleLoader,
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
        ...plugins,
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve('public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: IS_DEV ? '[name].css' : '[name].[hash].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.resolve('dist'),
        hot: true,
        historyApiFallback: true,
        overlay: {
            errors: true,
        },
        open: true,
        stats: {
            colors: true,
            errors: true,
            errorDetails: true,
            warnings: true,
            modules: false,
            hash: false,
            chunks: false,
            assets: false,
        }
    },
};
