const path = require('path');
const webpack = require('webpack');
const getPackageJson = require('./scripts/getPackageJson');

const {
  version,
  name,
  license,
  repository,
  author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *\<[^)]*\> */g, " ")}

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: "production",
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'ironvest.js',
    path: path.resolve(__dirname, 'build'),
    library: 'Ironvest',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    umdNamedDefine: true
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
       stream: require.resolve("stream-browserify")
    }
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader'],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.ProvidePlugin({process: 'process/browser'}),
    new webpack.ProvidePlugin({Buffer: ['buffer', 'Buffer']})
  ]
};