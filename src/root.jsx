import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'components/Index/Index';
import 'scss/style.scss';

const rootElement = document.querySelector('#main');

ReactDOM.render(<Index />, rootElement);

if (module.hot) {
	module.hot.accept(Index, () => {
		ReactDOM.render(<Index />, rootElement);
	});
}