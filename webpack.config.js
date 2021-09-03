const {resolve} = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: resolve(__dirname,'dist')
    },
    target: 'node',
    mode: 'development',
    devServer: {
        static: {
            directory: resolve(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    }
}