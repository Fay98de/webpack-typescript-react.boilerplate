export interface IWebpackEnv {
  mode: 'production' | 'development'
  [key: string]: string | boolean
}

export interface IArgv {
  [key: string]: string | string[]
}
