var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "starter.js",
        library: 'starter'
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.less$/,
              loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    devServer: {
      inline: true,
      contentBase: path.join(__dirname, 'example')
    }
};
