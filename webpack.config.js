var path = require('path');

var DEST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: __dirname + '/src',
    output: {
        path: DEST_DIR,
        filename: "bundle.js",
    },
    devtool: 'source-maps',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    }
}
