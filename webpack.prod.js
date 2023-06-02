const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',

    devtool: 'source-map',

    entry: {
        home: './src/home.js',
        about: './src/about/about.js',
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].css",
            }),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './src/index.html',
            chucks: ['home'],
            inject: "body",
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            template: './src/about/index.html',
            chucks: ['about'],
            inject: "body",
            filename: 'about.html',
        })
    ],

    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
}