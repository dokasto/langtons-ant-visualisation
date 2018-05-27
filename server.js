const express = require('express');
const config = require('./webpack.config');

const compiler = require('webpack')(config);
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const port = 5090;

app.use(express.static('dist'));

if (ENVIRONMENT === 'development') {
	// Attach webpack dev server to running app
	(serverInstance => {
		const options = {
			historyApiFallback: true,
			hot: true,
			noInfo: true,
			publicPath: config.output.publicPath
		};
		serverInstance.use(webpackDevMiddleWare(compiler, options));
		serverInstance.use(webpackHotMiddleware(compiler));
	})(app);
}

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
	console.log(`Langtons Ant visualisation running on port ${port} in ${ENVIRONMENT} mode`);
});