const WorkboxPlugin = require("workbox-webpack-plugin")

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
	runtimeCompiler: true,
	configureWebpack: {
		plugins: [
			new WorkboxPlugin.InjectManifest({

			})
		]
	}
};
