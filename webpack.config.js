const ENVIRONMENT = process.env.NODE_ENV;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const postCSSLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: true,
		plugins() {
			return [
				autoprefixer({
					browsers: ['last 3 versions']
				})
			];
		}
	}
};

const config = {
	devtool: 'source-map',

	stats: {
		colors: true,
		reasons: true
	},

	entry: {
		bundle: [`${__dirname}/src/root.jsx`]
	},

	target: 'web',

	output: {
		libraryTarget: 'var',
		path: `${__dirname}/dist/`,
		filename: '[name].js',
		chunkFilename: '[id].js',
		publicPath: '/dist/'
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(ENVIRONMENT)
			}
		}),
		new webpack.DefinePlugin({ 'global.GENTLY': false }),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin('style.css')
	],

	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx'],
		alias: {
			img: path.resolve(__dirname, './img')
		}
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{ loader: 'css-loader', options: { minimize: true, importLoaders: 1 } }, postCSSLoader, { loader: 'sass-loader' }]
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: { minimize: true, importLoaders: 1 }
						}
					]
				})
			},
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: ['babel-loader'] },
			{ test: /\.json$/, exclude: /node_modules/, loader: 'json' },
			{ test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=100000' },
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	}
};

if (ENVIRONMENT === 'development') {
	// add modules for hot reloading
	config.entry.bundle.unshift('webpack-hot-middleware/client');
	config.entry.bundle.unshift('webpack/hot/dev-server');
	config.plugins.push(new webpack.HotModuleReplacementPlugin());

	config.module.rules[0] = {
		test: /\.scss$/,
		use: [
			{ loader: 'style-loader' },
			{
				loader: 'css-loader',
				options: { minimize: true, importLoaders: 1 }
			},
			postCSSLoader,
			{
				loader: 'sass-loader',
				options: {
					includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')],
					sourceMap: true
				}
			}
		]
	};

	config.module.rules[1] = { test: /\.css$/, exclude: /node_modules/, loader: ['css-loader'] };
} else {
	/**
	 * PRODUCTION!
	 */

	const options = {
		sourceMap: true,
		comments: false,
		minimize: true,
		compress: {
			drop_console: true
		}
	};

	// minify JS
	config.plugins.push(new webpack.optimize.UglifyJsPlugin(options));
}

module.exports = config;