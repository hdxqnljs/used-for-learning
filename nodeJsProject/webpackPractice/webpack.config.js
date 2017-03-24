// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


module.exports = {
	//devtool: 'eval-source-map',
	entry: {
		module1: './source/main.js'
	},
	output: {
		path:  __dirname + '/target/',
		filename: '[name]-bundle.js'
	},
	module: {
		loaders: [
			{test: /\.json$/, loader: 'json-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015','react']},exclude: /node_modules/, include: [path.resolve(__dirname,'source')]}
		]
	},
	resolve: {
		extensions: ['.css','.js',',json']
	}
}