import * as path from 'path'

import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import * as webpack from 'webpack'
import * as yargs from 'yargs'

import { IArgv, IWebpackEnv } from './interface'
import * as paths from './paths'

const argv = yargs.argv as IArgv
const getArgs = (key: string) => {
  const arg = argv[key]
  if (!arg) return []
  return typeof arg === 'string' ? [arg] : arg
}

const webpackEnvArgs: string[] = getArgs('env')

export const webpackEnv: IWebpackEnv = {
  mode: 'production',
}

webpackEnvArgs.forEach((kv: string) => {
  const [key, value = true] = kv.split('=')
  webpackEnv[key] = value
})

const { mode } = webpackEnv

const env = dotenv.config({
  path: paths.dotenv[mode],
})

dotenvExpand(env)

export const isProd = mode === 'production'
export const isDev = mode === 'development'
// export const isTest = mode === 'test'
// export const isProfile = mode === 'profile'

export const PROTOCOL = process.env.PROTOCOL || 'http'
export const HOST = process.env.HOST || '0.0.0.0'
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000
