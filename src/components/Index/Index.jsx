import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';
import Ant from 'components/Ant/Ant';
import Controls from 'components/Controls/Controls';

class Index extends React.Component {
	constructor() {
		super();
	}

	_onReset = () => {

	};

	_onPausePlay = () => {
		console.log('play');
	};

	_onNext = () => {

	};

	render() {
		return (
			<div className="index">
				<div className="container">
					<Board width={800} rows={50} cols={80} />
					<Ant />
					<Controls onReset={this._onReset} onPausePlay={this._onPausePlay} onNextr={this._onNext} />
				</div>
			</div>
		);
	}
}

export default Index;
