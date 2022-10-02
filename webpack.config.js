const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}