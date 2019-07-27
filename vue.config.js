const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	resolve: {
		alias: {
			'@': resolve('src'),
		}
	},
	transpileDependencies: [
	],
	publicPath: process.env.NODE_ENV === 'production'
		? '/fortjoy-ui/'
		: '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

	devServer: {
		port: 24601,

	},
	runtimeCompiler: true
};
