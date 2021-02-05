import * as path from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, ProvidePlugin } from 'webpack'

import { HOST, PORT, PROTOCOL, isDev, webpackEnv } from './env'
import * as paths from './paths'

const { appRoot, appSrc, appHtml, tsconfig, eslintrc } = paths

export const cleanWebpackPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json'],
})

export const copyPlugin = new CopyPlugin({
  patterns: [{ from: path.resolve(appSrc, './assets'), to: 'assets' }],
})

export const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(webpackEnv.mode),
  },
})

export const esLintPlugin = new ESLintPlugin({
  // context: appRoot,
  files: appSrc,
  extensions: ['js', 'jsx', 'ts', 'tsx'],
  // eslintPath: eslintrc,
  cache: true,
  emitError: true,
})

export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
  async: isDev,
  typescript: {
    configFile: tsconfig,
  },
  eslint: { enabled: true, files: `${appSrc}/**/*.{ts,tsx,js,jsx}` },
  logger: { infrastructure: 'silent', issues: 'console' },
})

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: appHtml,
})

export const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'static/css/[name].[contenthash:8].css',
  chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
})

/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @example
 *  {
 *       $: 'jquery',
 *  }
 */
export const providePlugin = new ProvidePlugin({})

export const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin()
