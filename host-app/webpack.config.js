const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    mode: 'development',
    performance: {
        maxAssetSize: 100000000,
    },
    devtool: 'cheap-module-source-map'
};