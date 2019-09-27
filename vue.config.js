module.exports = {
	transpileDependencies: [
	],
	publicPath: process.env.NODE_ENV === 'production'
		? '/fortjoy-ui/'
		: '/',
	devServer: {
		port: 24601,
		compress: true,
		disableHostCheck: true,
	},
	runtimeCompiler: true
};
