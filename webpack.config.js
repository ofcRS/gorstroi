const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    const mode = env.production ? 'production' : 'development';
    const isProd = mode === 'production';

    return {
        mode,
        target: 'web',
        watch: true,
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
            },
        },
        entry: {
            app: path.join(__dirname, 'src/index.js'),
        },
        devtool: isProd ? false : 'inline-source-map',
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public/index.html'),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: isProd,
                        compact: isProd,
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    loader: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                webpackImporter: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2)$/i,
                    use: 'url-loader?limit=100000',
                },
            ],
        },
        devServer: {
            contentBase: './dist',
            hot: true,
            writeToDisk: true,
            historyApiFallback: true,
            port: 3000,
        },
        output: {
            filename: isProd ? '[name].[contenthash].js' : '[name].[hash].js',
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                assets: path.resolve(__dirname, 'src/assets'),
                containers: path.resolve(__dirname, 'src/containers'),
            },
        },
    };
};
