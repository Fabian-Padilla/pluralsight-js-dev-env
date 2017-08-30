import webpack from 'webpack';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {

  debug: true,
  devtool: 'source-map',
  noInfo : false,


  // entry: [path.resolve(__dirname, 'src/index')],
  //  instead of an array we create an object to create a Bundle Splitting
  entry :
  {
    vendor: path.resolve(__dirname,'src/vendor'),
    main : path.resolve(__dirname,'src/index')
  },

  target: 'web',
  output: {

    path: path.resolve(__dirname,'dist'),
    publicPath: '/',
    fileName: '[name].js'
    //fileName: 'bundle.js',


  },
  devserver: {
    contentBase: path.resolve(__dirname,'dist')

  },
  plugins: [
    //  Use commonsChunkPlugin to create a separate bundle
    //  of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({

      name : 'vendor'
    }),
    //  this plug in will dynamically generate index.html in all environments
    //  create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject : true,

      //  minifying html
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeReduntantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes : true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS:true,
        minifyURLs : true
      }
    }),
    //  Eliminate duplicate packages when generate a bundle
    new webpack.optimize.DedupePlugin(),
    //  Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {

    loaders: [
       {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },

       {test: /\.css$/, loaders: ['style','css']}
    ]
  }


}
