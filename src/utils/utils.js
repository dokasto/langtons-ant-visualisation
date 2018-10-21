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
			if (antCellIsColored) {
				antDirection = DIRECTION.LEFT;
				antNextX = antX - 1;
			} else {
				antDirection = DIRECTION.RIGHT;
				antNextX = antX + 1;
			}
			break;
		case DIRECTION.DOWN:
			if (antCellIsColored) {
				antDirection = DIRECTION.RIGHT;
				antNextX = antX + 1;
			} else {
				antDirection = DIRECTION.LEFT;
				antNextX = antX - 1;
			}
			break;
		case DIRECTION.LEFT:
			if (antCellIsColored) {
				antDirection = DIRECTION.DOWN;
				antNextY = antY + 1;
			} else {
				antDirection = DIRECTION.UP;
				antNextY = antY - 1;
			}
			break;
		case DIRECTION.RIGHT:
			if (antCellIsColored) {
				antDirection = DIRECTION.UP;
				antNextY = antY - 1;
			} else {
				antDirection = DIRECTION.DOWN;
				antNextY = antY + 1;
			}
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
