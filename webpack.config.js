const path = require('path');

const CleanPlugin = require("clean-webpack-plugin");

const config = {
    mode: 'production',
    entry: {
        vendor: ['graphql', 'relay-local-schema', '@babel/polyfill', 'react'],
        index: ['./src/components/entrypoints/index.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'src','public'),
        filename: '[name].js',
        // publicPath: 'public'
    },
    module: {
        rules: [
            {   
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
      ],
}

module.exports = config;