const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ]
      },
      // {
      //   test: /\.es6$/, 
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       query: {
      //         presets: ['@babel/preset-env']
      //       }
      //     }
      //   ]
      // },
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
}