import path from 'path';

export default [
  {
    test: /\.tmpl$/,
    use: [
      'html-loader',
      {
        loader: 'nunjucks-html-loader',
        options: {
          searchPaths: [
            path.resolve('src'),
            path.resolve('src/elements'),
            path.resolve('src/layouts'),
          ],
        },
      }
    ],
  },
  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
];
