// process.env.NODE_PATH
// process.env.NODE_ENV
// process.env.BABEL_ENV
// process.env.TSC_COMPILE_ON_ERROR
// process.env.CI
// process.env.WDS_SOCKET_HOST
// process.env.WDS_SOCKET_PATH
// process.env.WDS_SOCKET_PORT
// process.env.FAST_REFRESH
// process.env.PUBLIC_URL
// process.env.INLINE_RUNTIME_CHUNK
// process.env.IMAGE_INLINE_SIZE_LIMIT
// process.env.DISABLE_NEW_JSX_TRANSFORM
// process.env.DANGEROUSLY_DISABLE_HOST_CHECK

// export const PROTOCOL = process.env.PROTOCOL || 'http'
// export const HOST = process.env.HOST || '0.0.0.0'
// export const PORT = process.env.PORT || 3000

const path = require('path')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

console.log(path.resolve(__dirname, '../.env.development'))

const env = dotenv.config({
  path: path.resolve(__dirname, '../.env.development'),
})

dotenvExpand(env)

const yargs = require('yargs')

// import { argv } from 'yargs'

console.log(yargs.argv)
// console.log(process.env)

// const { env } = argv
