import './webpack/env'
import prodConfig from './webpack/webpack.prod'
import devConfig from './webpack/webpack.dev'
import { IWebpackEnv, IArgv } from './webpack/interface'

const config = {
  production: prodConfig,
  development: devConfig,
}

export default (env: IWebpackEnv, argv: IArgv) => {
  return config[env.mode]
}
