const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	transpileDependencies: [
	],
	publicPath: process.env.NODE_ENV === 'production'
		? '/fortjoy/'
		: '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

	devServer: {
		port: 24601,
		compress: true,
    disableHostCheck: true,
	},
	runtimeCompiler: true
};
