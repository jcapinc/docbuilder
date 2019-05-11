const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'ts'),
	devtool: 'inline-source-map',
	entry: './main.tsx',
	mode: 'development',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},
	output: {
		filename: 'client.js',
		path: path.resolve(__dirname, 'build/')
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	}
};