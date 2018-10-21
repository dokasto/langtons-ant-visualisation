import DIRECTION from 'constants/direction';

const isColored = (x, y, coords) => {
	return coords.some(coord => {
		const [xPos, yPos] = coord;
		return xPos === x && yPos === y;
	});
};

const filterCoord = (x, y, coords) => {
	return coords.filter(coord => {
		const [xPos, yPos] = coord;
		return !(xPos === x && yPos === y);
	});
};

const isAntCell = (x, y, currentAntPos) => {
	const [xPos, yPos] = currentAntPos;
	return xPos === x && yPos === y;
};

const move = (antPosition, previousSteps, direction) => {
	const [antX, antY] = antPosition;
	let antNextX = antX;
	let antNextY = antY;
	let antDirection, coloredCells;
	const antCellIsColored = isColored(antX, antY, previousSteps);

	switch (direction) {
		case DIRECTION.UP:
			antDirection = antCellIsColored ? DIRECTION.LEFT : DIRECTION.RIGHT;
			antNextX = antCellIsColored ? antX - 1 : antX + 1;
		break;
		case DIRECTION.DOWN:
			antDirection = antCellIsColored ? DIRECTION.RIGHT : DIRECTION.LEFT;
			antNextX = antCellIsColored ? antX + 1 : antX - 1;
		break;
		case DIRECTION.LEFT:
			antDirection = antCellIsColored ? DIRECTION.DOWN : DIRECTION.UP;
			antNextY = antCellIsColored ? antY + 1 : antY - 1;
		break;
		case DIRECTION.RIGHT:
			antDirection = antCellIsColored ? DIRECTION.UP : DIRECTION.DOWN;
			antNextY = antCellIsColored ? antY - 1 : antY + 1;
		break;
		default:
			break;
	}

	if (antCellIsColored) {
		coloredCells = filterCoord(antX, antY, previousSteps);
	} else {
		coloredCells = [].concat(previousSteps);
		coloredCells.push([antX, antY]);
	}

	return {
		antPosition: [antNextX, antNextY],
		coloredCells,
		antDirection
	};
};

export { isColored, filterCoord, isAntCell, move };
