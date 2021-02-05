import { RuleSetRule } from 'webpack'

import { isDev } from './env'
import {
  babelLoader,
  cssLoader,
  cssModuleLoader,
  lessLoader,
  miniCssExtractLoader,
  postCssLoader,
  resolveUrlLoader,
  sassLoader,
  sassResourceLoader,
  styleLoader,
  svgrLoader,
  typingsCssModulesLoader,
} from './loaders'
import { babelrc } from './paths'

const reg = {
  ts: /\.(ts|tsx)$/,
  js: /\.(js|jsx)$/,
  css: /\.(css)$/,
  less: /\.(less)$/,
  lessModule: /\.module\.(less)$/,
  sass: /\.(scss|sass)$/,
  sassModule: /\.module\.(scss|sass)$/,
  html: /\.(html)$/,
  image: /\.(ico|gif|png|jpg|jpeg)$/i,
  svg: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  font: /\.(woff|woff2|eot|ttf|otf)$/,
}

const outputStyleLoader = isDev ? styleLoader : miniCssExtractLoader

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const js: RuleSetRule = {
  test: reg.js,
  use: [
    {
      loader: 'babel-loader',
      options: {
        configFile: babelrc,
      },
    },
  ],
}

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const ts: RuleSetRule = {
  test: reg.ts,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
  exclude: /node_modules/,
}

export const css: RuleSetRule = {
  test: reg.css,
  use: [outputStyleLoader, postCssLoader, resolveUrlLoader, cssLoader],
}

export const less: RuleSetRule = {
  test: reg.less,
  exclude: reg.lessModule,
  use: [outputStyleLoader, cssLoader, postCssLoader, resolveUrlLoader, lessLoader],
}

export const lessModule: RuleSetRule = {
  test: reg.lessModule,
  use: [
    outputStyleLoader,
    // typingsCssModulesLoader,
    cssModuleLoader,
    postCssLoader,
    resolveUrlLoader,
    lessLoader,
  ],
}

export const sass: RuleSetRule = {
  test: reg.sass,
  exclude: reg.sassModule,
  use: [
    outputStyleLoader,
    cssLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoader,
    sassResourceLoader,
  ],
}

export const sassModule: RuleSetRule = {
  test: reg.sassModule,
  use: [
    outputStyleLoader,
    // typingsCssModulesLoader,
    cssModuleLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoader,
    sassResourceLoader,
  ],
}

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const html: RuleSetRule = {
  test: reg.html,
  use: ['html-loader'],
}

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const image: RuleSetRule = {
  test: reg.image,
  type: 'asset/resource',
}

/**
 * Using file-loader for handling svg files
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const svg: RuleSetRule = {
  test: reg.svg,
  // issuer: { not: [/\.(jsx|tsx)$/] },
  type: 'asset/inline',
}

export const svgr: RuleSetRule = {
  test: reg.svg,
  issuer: [/\.(jsx|tsx)$/],
  use: [babelLoader, svgrLoader],
}

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const font: RuleSetRule = {
  test: reg.font,
  type: 'asset/inline',
}
