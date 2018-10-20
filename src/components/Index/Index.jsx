import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';
import Controls from 'components/Controls/Controls';
import { move } from 'utils/utils';
import DIRECTION from 'constants/direction';

class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			coloredCells: [],
			antPosition: [40, 26],
			antDirection: DIRECTION.UP,
			steps: 0
		};
	}

	_onReset = () => {

	};

	_onPausePlay = () => {
	};

	_onNext = () => {
		const {antPosition, coloredCells, antDirection} = move(this.state.antPosition, this.state.coloredCells, this.state.antDirection);
		this.setState({ antPosition, antDirection, coloredCells, steps: this.state.steps + 1 });
	};

	render() {
		return (
			<div className="index">
				<div className="container">
					<Board currentAntPos={this.state.antPosition} coloredCells={this.state.coloredCells} width={800} rows={50} cols={80} />
					<Controls onReset={this._onReset} onPausePlay={this._onPausePlay} onNext={this._onNext} />
					<div className="steps">Steps: {this.state.steps}</div>
				</div>
			</div>
		);
	}
}

export default Index;
