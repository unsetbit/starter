var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '/',
        filename: "starter.js",
        library: 'starter',
        libraryTarget: 'var'
    },
    module: {
      rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
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
      contentBase: path.join(__dirname, 'example')
    },
    devtool: 'source-map'
};
