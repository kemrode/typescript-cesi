const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { filename: '[name].js', path: path.resolve(__dirname, '../dist') },
    resolve: { extensions: ['.js', '.ts'] },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './src/index.html',
            inject: true,
            minify: { removeComments: true, collapseWhitespace: false }
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets/images', to: 'assets/images' }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
            test: [/.js$|.ts$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/typescript'
                    ]
                }
            }
        },
        {
            test: [/.css$|.scss$/],
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                }
            }]
        }
        ]
    }
};