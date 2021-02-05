import { Configuration } from 'webpack'

const optimization: Configuration['optimization'] = {
  runtimeChunk: {
    name: 'runtime',
  },
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial',
      },
    },
  },
}

export default optimization
