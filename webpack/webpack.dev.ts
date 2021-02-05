import * as _ from 'lodash'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import * as plugins from './plugins'
import devServer from './server'
import commonConfig from './webpack.common'

const devConfig: Configuration = {
  mode: 'development',
  output: {
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    pathinfo: false,
    publicPath: '/',
  },

  plugins: [plugins.reactRefreshWebpackPlugin],
  devtool: 'cheap-module-source-map',
  devServer,
}

const config = merge<Configuration>(commonConfig, devConfig)

export default config
