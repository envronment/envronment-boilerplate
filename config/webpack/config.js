import path from 'path';

import devServer from './devServer';
import plugins from './plugins';
import rules from './rules';

export default {
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve('public/assets'),
    publicPath: 'assets/',
    filename: 'index.js',
  },
  module: {
    rules,
  },
  plugins,
  devServer,
};
