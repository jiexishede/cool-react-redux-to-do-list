const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const nodeEnv = 'development';

const sourcePath = path.join(__dirname, '../src');
const buildPath = path.join(__dirname, './build');
const publicPath = path.join(__dirname, '../public');


// Common plugins
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [autoprefixer({browsers: 'last 2 version'})],
      context: sourcePath,
    },
  }),
  new webpack.NoEmitOnErrorsPlugin()
];

// Common rules
const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['react-hot-loader/webpack', 'babel-loader'],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss-loader'
    ],
  }
];

module.exports = {
  cache: true,
  devtool: 'inline-source-map',
  // devtool: 'eval',

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js',
  ],

  output: {
    path: path.join(__dirname, '../public', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    rules,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      sourcePath,
    ],
  },

  plugins

};