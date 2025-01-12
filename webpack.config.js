const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'js/dist'),
    filename: 'bundle.js',
    publicPath: process.env.NODE_ENV === 'production' 
      ? '/VineetKumarLoyer/'  // Your actual repo name
      : '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};