// task_4/webpack.config.js

const path = require('path');

module.exports = {
  mode: 'development', // or 'production', set this option
  entry: './js/main.ts', // Ensure this points to your main.ts file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output to the dist directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // For TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
};
