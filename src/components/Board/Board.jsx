import React from 'react';
import './Board.scss';

const createGrid = (row, col) => {
	const grids = [];
	let uniqueKey = 0;

	for(let i=0; i<row; i++) {
		for(let j=0; j<col; j++) {
			uniqueKey++;
			grids.push(<span key={uniqueKey} className="grid">&nbsp;</span>);
		}
	}
	
	return grids;
};

const Board = ({ width, rows, cols}) => (
	<div className="board" style={{ width: `${width}px`}}>
		{createGrid(rows, cols)}
	</div>
);

export default Board;