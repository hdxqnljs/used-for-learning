module.exports = {
	entry: {
		module1: './source/main.js'
	},
	output: {
		path:  __dirname + '/target/',
		filename: '[name]-bundle.js'
	},
	resolve: {
		extensions: ['.css','.js']
	}
}