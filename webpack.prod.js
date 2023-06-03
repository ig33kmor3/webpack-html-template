const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',

    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },

    devtool: 'source-map',

    entry: {
        home: { import: './src/js/home.js', filename: 'js/home.js' },
        about: { import: './src/js/about.js', filename: 'js/about.js' },
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]',
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
                filename: "css/[name].[contenthash].css",
                chunkFilename: "[id].css",
            }),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './src/index.html',
            chucks: ['home'],
            excludeChunks: ['about'],
            inject: "body",
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            template: './src/about/index.html',
            chucks: ['about'],
            excludeChunks: ['home'],
            inject: "body",
            filename: './about/index.html',
        })
    ],

    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
}