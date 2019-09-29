#! /bin/node
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config');

const BUILD_FOLDER = path.resolve(__dirname, './dist');
const BUNDLE_NAME = path.resolve(__dirname, './bundle.js');

if (!fs.existsSync(BUILD_FOLDER)) {
  fs.mkdirSync(BUILD_FOLDER);
}

webpack(config, (err, stats) => {
  if (err) {
    throw err;
    return;
  }

  fs.copyFileSync(BUNDLE_NAME, path.resolve(BUILD_FOLDER, './bundle.js'));
  fs.copyFileSync(
    path.resolve(__dirname, './index.html'),
    path.resolve(BUILD_FOLDER, 'index.html')
  );
});
