import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from 'components/Board/Board';
import 'scss/style.scss';

const rootElement = document.querySelector('#main');

ReactDOM.render(<Board />, rootElement);

if (module.hot) {
	module.hot.accept(Board, () => {
		ReactDOM.render(<Board />, rootElement);
	});
}