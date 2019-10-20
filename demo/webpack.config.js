const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 9000,
    contentBase: './',
    disableHostCheck: true
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
