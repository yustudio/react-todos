var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',  //gives line # if error during debugging
	entry: [  // where to look for files
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'  // where webpack to look for initial file to run, default look for index.js
	],
	output: {  // where webpack would output file during production
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {   // where webpack to look for files to bundle together
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: {  // define loaders
		loaders: [
		{
			test: /\.jsx?$/,  // if using jsx files
			excludes: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
			//loaders: ['react-hot', 'babel?presents[]=react,presents[]=es2015']  // babel to transcompile es6 to js, also es2015 for additional features
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),  // hot reloading
		new webpack.NoErrorsPlugin()  // webpack won't compile if error
	]
}