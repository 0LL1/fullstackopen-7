const path = require('path')
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack')

module.exports = (env, argv) => {
  console.log('argv', argv.mode)

  const backend_url =
    argv.mode === 'production' ? 'TODO' : 'http://localhost:3003'

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      compress: true,
      port: 4000,
      hot: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new DefinePlugin({ BACKEND_URL: JSON.stringify(backend_url) }),
      new HotModuleReplacementPlugin()
    ]
  }
}
