const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        inline: true,
        port: 8100,
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'app'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'app'), 
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: { modules: true}} 
                ]
            },
            {
                /* legacy css from node_modules should not have css-loader modules enabled */
                test: /\.css$/,
                include: path.resolve(__dirname, 'node_modules'), 
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'} 
                ]
            },
            {
                test: /\.png$/,
                use: { loader: 'file-loader', options: { publicPath: 'dist/', name: '[name].[ext]' } },
            }
        ]
    }
};