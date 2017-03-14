/**
 * NodeJS Version 6.*.*
 * Any Express
 * */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('../config/webpack.config.dev.js');

const host = 'localhost';
const port = 4444;

const app = express();
const compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true},
  publicPath: webpackDevConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${host}:${port}`);
});