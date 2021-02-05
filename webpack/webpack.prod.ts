import { Configuration } from 'webpack'
import * as _ from 'lodash'
import { merge } from 'webpack-merge'
import TerserPlugin from 'terser-webpack-plugin'
import commonConfig from './webpack.common'
import * as plugins from './plugins'

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash:8].chunk.js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  devtool: 'source-map',
  plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({})],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}

const config = merge<Configuration>(commonConfig, prodConfig)

export default config
