var path = require('path');
var WebpackMonitor = require('webpack-monitor');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var packageFile = require('./package.json');
var webpack = require('webpack');
var PrependText = require('./webpack/PrependText.js');

var license = '/**\n' +
'* Copyright 2016 PT Inovação e Sistemas SA\n' +
'* Copyright 2016 INESC-ID\n' +
'* Copyright 2016 QUOBIS NETWORKS SL\n' +
'* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V\n' +
'* Copyright 2016 ORANGE SA\n' +
'* Copyright 2016 Deutsche Telekom AG\n' +
'* Copyright 2016 Apizee\n' +
'* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN\n' +
'*\n' +
'* Licensed under the Apache License, Version 2.0 (the "License");\n' +
'* you may not use this file except in compliance with the License.\n' +
'* You may obtain a copy of the License at\n' +
'*\n' +
'*   http://www.apache.org/licenses/LICENSE-2.0\n' +
'*\n' +
'* Unless required by applicable law or agreed to in writing, software\n' +
'* distributed under the License is distributed on an "AS IS" BASIS,\n' +
'* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
'* See the License for the specific language governing permissions and\n' +
'* limitations under the License.\n' +
'**/\n\n';

function getModeConfig() {

  var plugins = [];

  plugins.push(new PrependText({
    bundleDir: './dist/',
    data: {
      version: packageFile.version,
      date: new Date(),
      licence: '\n' + license
    }
  }));

  if (process.env.MONITOR) {
    plugins.push(new WebpackMonitor({
      launch: true, // -> default 'false'
      port: 3031 // default -> 8081
    }));
  }

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    uglifyOptions: {
      comments: false,
      compress: {
        drop_console: true,
        warnings: false
      }
    }
  }));

  return plugins;
}

module.exports = {
  entry: {
    RuntimeCapabilities: './src/runtime-capabilities/RuntimeCapabilities.js',
    StorageManager: './src/StorageManager.js',
    CatalogueFactory: './src/CatalogueFactory.js',
    Discovery: './src/Discovery.js',
    IdentityManager: './src/IdentityManager.js',
    ContextManager: './src/ContextManager.js',
    WalletManager: './src/WalletManager.js',
    ChatManager: './src/ChatManager.js',
    MessageFactory: './src/MessageFactory.js',
    PersistenceManager: './src/PersistenceManager.js',
    RuntimeCatalogue: './src/RuntimeCatalogue.js',
    IdentityFactory: './src/IdentityFactory.js',
    Syncher: './src/Syncher.js',
    HypertyResource: './src/HypertyResource.js',
    Utils: './src/Utils.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: ['', '[name]'],
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: process.env.MODE === 'dev' ? 'eval-source-map' : 'none',
  module: {
    rules: [

      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          { loader: 'eslint-loader', options: { configFile: './.eslintrc.yml' }}
        ]
      },*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  resolve: { extensions: ['.js'] },
  plugins: getModeConfig()
};
