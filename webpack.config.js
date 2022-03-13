const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  // allow source code debugging
  devtool: 'inline-source-map',

  // auto-refresh + watcher. Serve the files from the dist directory on localhost:8080
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
   module: {
    rules: [
      // css loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // asset loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};