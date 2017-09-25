import { readdirSync } from 'fs';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';

const tmplExt = '.tmpl';

const removeExt = (name, ext) => name.split(ext).join('');

const pages = readdirSync(path.resolve('src'))
  .filter((file) => file.includes(tmplExt))
  .map((page) => new HtmlWebpackPlugin({
    template: path.resolve(`src/${page}`),
    filename: path.resolve(`public/${removeExt(page, tmplExt)}.html`),
    inject: 'head',
    alwaysWriteToDisk: true,
  }));

export default [
  ...pages,
  new CopyWebpackPlugin([
    { from: path.resolve('src/assets') },
  ]),
  new HtmlWebpackHarddiskPlugin(),
];
