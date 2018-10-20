import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';
import Controls from 'components/Controls/Controls';
import { move } from 'utils/utils';
import DIRECTION from 'constants/direction';

const DEFAULT_STATE = {
	coloredCells: [],
	antPosition: [40, 24],
	antDirection: DIRECTION.UP,
	steps: 0,
	isPaused: true
};

const SPEED = 100;

class Index extends React.Component {
	constructor() {
		super();
		this.state = { ...DEFAULT_STATE };
		this._isMounted = false;
		this._timeout = null;
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	_moveOneStep = (done = () => {}) => {
		const { antPosition, coloredCells, antDirection } = move(
			this.state.antPosition,
			this.state.coloredCells,
			this.state.antDirection
		);
		this.setState({ antPosition, antDirection, coloredCells, steps: this.state.steps + 1 }, done);
	};

	_togglePause = () => {
		if (this.state.isPaused) {
			this.setState({ isPaused: false }, this._play);
		} else {
			clearTimeout(this._timeout);
			this.setState({ isPaused: true });
		}
	};

	_play = () => {
		if (!this.state.isPaused && this._isMounted) {
			this._timeout = setTimeout(() => {
				this._moveOneStep(this._play);
			}, SPEED);
		}
	};

	_onNext = () => {
		this._moveOneStep();
	};

	_onReset = () => {
		clearTimeout(this._timeout);
		this.setState({ ...DEFAULT_STATE });
	};

	render() {
		return (
			<div className="index">
				<div className="container">
					<h2>Langtons Ant (React)</h2>
					<Board
						currentAntPos={this.state.antPosition}
						coloredCells={this.state.coloredCells}
						width={800}
						rows={50}
						cols={80}
					/>
					<Controls
						onReset={this._onReset}
						isPaused={this.state.isPaused}
						onPausePlay={this._togglePause}
						onNext={this._onNext}
					/>
					<div className="steps">
						Steps: {this.state.steps} Direction: {this.state.antDirection}
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
