import * as path from 'path'

export const appRoot = path.resolve(__dirname, '../')
export const appSrc = path.resolve(appRoot, 'src')
export const appDist = path.resolve(appRoot, 'dist')
export const appPublic = path.resolve(appRoot, 'public')
export const appIndex = path.resolve(appSrc, 'index')
export const appHtml = path.resolve(appPublic, 'index.html')

export const babelrc = path.resolve(appRoot, '.babelrc.js')
export const eslintrc = path.resolve(appRoot, '.eslintrc.js')
export const tsconfig = path.resolve(appRoot, 'tsconfig.json')

export const dotenv = {
  development: path.resolve(appRoot, '.env.development'),
  production: path.resolve(appRoot, '.env.production'),
}

/**
 * Resource for sass-resource-loader
 * @see https://github.com/shakacode/sass-resources-loader
 * @example
 *  [
 *      path.resolve(appSrc, './styles/variables.scss'),
 *  ]
 */
export const sassResources = []
