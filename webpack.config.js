const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    //   devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    devtool: 'inline-source-map',
}