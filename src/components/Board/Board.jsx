import React from 'react';
import './Board.scss';
import { isAntCell, isColored } from 'utils/utils';

const createGrid = (row, col, currentAntPos, coloredCells = []) => {
	const cellRows = [];

	for (let i = 0; i < row; i++) {
		const cellCols = [];
		for (let j = 0; j < col; j++) {
			cellCols.push(
				<span
					key={`row-${i}-col-${j}`}
					className="cell"
					data-is-colored={isColored(j, i, coloredCells)}
					data-has-ant={isAntCell(j, i, currentAntPos)}
				/>
			);
		}
		cellRows.push(<li key={`row-${i}`}>{cellCols}</li>);
	}

	return cellRows;
};

const Board = ({ currentAntPos, coloredCells, width, rows, cols }) => (
	<div className="board" style={{ width: `${width}px` }}>
		<ul>{createGrid(rows, cols, currentAntPos, coloredCells)}</ul>
	</div>
);

export default Board;
