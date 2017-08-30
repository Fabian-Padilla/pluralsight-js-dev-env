//import webpack from 'webpack';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  debug: true,
  devtool: 'inline-source-map',
  noInfo : false,
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {

    path: path.resolve(__dirname,'src'),
    publicPath: '/',
    fileName: 'bundle.js',

  },
  devserver: {
    contentBase: path.resolve(__dirname,'src')

  },
  plugins: [

    //  this plug in will dynamically generate index.html in all environments
    //  create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject : true // inject any necesary script tags
    })
  ],
  module: {

    loaders: [
       {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },

       {test: /\.css$/, loaders: ['style','css']}
    ]
  }


}
