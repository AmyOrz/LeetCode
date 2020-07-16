/* config-overrides.js */
const path = require('path')
const paths = require('react-scripts/config/paths')

const {
  override,
  addWebpackAlias,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra')
const REACT_APP_ENV = process.env.REACT_APP_ENV
//  env 是 process.env.NODE_ENV  react-app-rewired build 时  env==='production'
let cdnPublicPath = ''
let ossProject = '//static.dragonest.com/react-gm-front'
if (process.env.REACT_APP_ENV === 'qa') {
  cdnPublicPath = `${ossProject}/qa/`
} else if (process.env.REACT_APP_ENV === 'prod') {
  cdnPublicPath = `${ossProject}/prod/`
} else if (process.env.REACT_APP_ENV === 'dev') {
  cdnPublicPath = `${ossProject}/dev/`
} else if (process.env.REACT_APP_ENV === 'pre') {
  cdnPublicPath = `${ossProject}/pre/`
}
const path_config = () => (config, env) => {
  // 非打包环境下
  if (config.mode !== 'production') {
    return config
  }
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : false
  // 修改path目录
  paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
  config.output.path = path.join(path.dirname(config.output.path), 'dist')
  config.output.publicPath = cdnPublicPath
  return config
}

const alter_config = () => (config, env) => {
  const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
  config.module.rules[oneOf_loc].oneOf = [
    //例如要增加处理less的配置
    {
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
              // modifyVars: getThemeVariables({
              //   dark: false, // 开启暗黑模式
              //   compact: false, // 开启紧凑模式
              // }),
              // javascriptEnabled: true,
            },
          },
        },
      ],
    },
    ...config.module.rules[oneOf_loc].oneOf,
  ]
  return config
}

module.exports = override(
  addBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }]),
  addWebpackAlias({
    //增加路径别名的处理
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
  }),
  alter_config(),
  path_config()
)
