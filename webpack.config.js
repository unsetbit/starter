var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "starter.js",
        library: 'starter',
        libraryTarget: 'var'
    },
    module: {
      rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=env'
          }
        ]
    },
    plugins: [],
    devServer: {
      inline: true,
      contentBase: path.join(__dirname, 'docs', '_site')
    },
    devtool: 'source-map'
};
