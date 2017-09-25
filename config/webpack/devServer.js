import path from 'path';

export default {
  contentBase: [
    path.resolve('public'),
  ],
  noInfo: false,            // do not print bundle build stats
  hot: true,                // enable HMR
  inline: true,             // embed the webpack-dev-server runtime into the bundle
  historyApiFallback: true, // serve index.html in place of 404 responses to allow HTML5 history
  port: '8884',
  host: '0.0.0.0',
  disableHostCheck: true,
};
