import React from 'react';
import './Board.scss';

const createGrid = ({row, col, antX, antY}) => {
	const grids = [];
	for(let i=0; i<row; i++) {
		for(let j=0; j<col; j++) {
			const current = antX === j && antY === i;
			grids.push(<span data-current={current} className="grid">1</span>);
		}
	}
	return grids;
};

const Board = props => (
	<div className="board">
		{createGrid(props).map((Grid, index) => <Grid key={index} />)}
	</div>
);

export default Board;