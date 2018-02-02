const path = require('path');
// const DefinePlugin = require('webpack').DefinePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

// const UglifyJSPluginConfig = new UglifyJSPlugin({ 
//   parallel: true
//  })

//  const DefinePluginConfig = new DefinePlugin({
//   PRODUCTION: JSON.stringify('false'),
//   DEV: JSON.stringify('true')
//  })

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js'
  },
  target: "web",
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname + '/app')
        ]
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
        include: [
          path.resolve(__dirname + '/app')
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: true,
    port: 9000
  }
};

module.exports = config
