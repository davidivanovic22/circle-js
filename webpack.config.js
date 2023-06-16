const path = require('path');

module.exports = {
  // Other webpack configuration options
  // ...

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
};
