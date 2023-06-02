const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    devtool: 'inline-source-map',

    entry: {
        home: './src/home.js',
        about: './src/about/about.js',
    },

    output: {
        filename: '[name].[contenthash].dev.js',
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
    },
}