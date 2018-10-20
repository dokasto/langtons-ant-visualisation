import React from 'react';
import './Board.scss';

const createGrid = (row, col) => {
	const cellRows = [];

	for(let i=0; i<row; i++) {
		const cellCols = [];
		for(let j=0; j<col; j++) {
			cellCols.push(<span key={`row-${i}-col-${j}`} className="cell"></span>);
		}
		cellRows.push(<li key={`row-${i}`}>{cellCols}</li>);
	}
	
	return cellRows;
};

const Board = ({ width, rows, cols}) => (
	<div className="board" style={{ width: `${width}px`}}>
		<ul>
			{createGrid(rows, cols)}
		</ul>
	</div>
);

export default Board;