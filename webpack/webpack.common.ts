import { Configuration } from 'webpack'

import alias from './alias'
import entry from './entry'
import extensions from './extensions'
import externals from './externals'
import optimization from './optimization'
import { appDist, appSrc } from './paths'
import * as plugins from './plugins'
import * as rules from './rules'

const config: Configuration = {
  mode: 'none',
  context: appSrc,
  entry,
  output: {
    path: appDist,
  },
  resolve: {
    alias,
    extensions,
  },
  externals,
  module: {
    rules: [
      rules.js,
      rules.ts,
      rules.css,
      rules.lessModule,
      rules.less,
      rules.sassModule,
      rules.sass,
      rules.html,
      rules.image,
      rules.svg,
      // rules.svgr,
      rules.font,
    ],
  },
  plugins: [
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.esLintPlugin,
    // plugins.copyPlugin,
  ],
  optimization,
  bail: true,
  infrastructureLogging: {
    level: 'verbose',
  },
}

export default config
