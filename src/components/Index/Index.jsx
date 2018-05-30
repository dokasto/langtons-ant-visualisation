import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';

const Index = () => (
	<div className="index">
		<Board row={5} col={10} antX={3} antY={3} />
	</div>
);

export default Index;