const path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '/',
        filename: 'starter.js',
        library: 'starter',
        libraryTarget: 'var'
    },
    module: {
      rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }]
    },
    devServer: {
      inline: true,
      contentBase: path.join(__dirname, 'example')
    },
    devtool: 'source-map'
};
