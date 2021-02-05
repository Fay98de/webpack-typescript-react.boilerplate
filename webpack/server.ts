import { Configuration } from 'webpack'

import { HOST, PORT } from './env'
import proxy from './proxy'

const devServer: Configuration['devServer'] = {
  publicPath: '/',
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  lazy: false,
  open: false,
  overlay: true,
  quiet: false,
  noInfo: false,
  clientLogLevel: 'error',
  stats: 'errors-warnings',
  proxy,
}

export default devServer
