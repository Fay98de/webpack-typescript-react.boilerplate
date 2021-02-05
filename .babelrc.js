const { argv } = require('yargs')

const getArgs = (key) => {
  const arg = argv[key]
  if (!arg) return []
  return typeof arg === 'string' ? [arg] : arg
}

const env = getArgs('env')
const isDev = env.includes('mode=development')

const babelConfig = {
  presets: [
    // [
    //   '@babel/preset-env',
    //   {
    //     targets: {
    //       browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
    //     },
    //     useBuiltIns: 'usage',
    //     debug: false,
    //     corejs: 3,
    //   },
    // ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/proposal-object-rest-spread',
    isDev && 'react-refresh/babel',
  ].filter(Boolean),
}

module.exports = babelConfig
