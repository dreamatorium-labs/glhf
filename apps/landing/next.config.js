const { resolve } = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
	typescript: {
		ignoreBuildErrors: true,
	},
	transpilePackages: [
		'@repo/ui',
		'@walless/gui',
		'@walless/icons',
		'@react-native-community/slider',
		'react-native',
		'react-native-svg',
		'react-native-reanimated',
	],
	webpack: (config, { isServer, webpack }) => {
		config.resolve.alias = Object.assign({}, config.resolve.alias, {
			'react-native$': 'react-native-web',
		});

		config.resolve.extensions = [
			'.web.js',
			'.web.jsx',
			'.web.ts',
			'.web.tsx',
			...config.resolve.extensions,
		];

		config.plugins.push(
			new webpack.DefinePlugin({
				__DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
			}),
		);

		if (isServer) {
			config.plugins.push(
				new webpack.ProvidePlugin({
					requestAnimationFrame: resolve(__dirname, './raf.js'),
				}),
			);
		}

		return config;
	},
};
