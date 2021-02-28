const path = require('path');

module.exports = {
    entry: {
        vendor: ['graphql', 'relay-local-schema'],
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: 'public'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}