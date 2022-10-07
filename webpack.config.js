const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: false,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}