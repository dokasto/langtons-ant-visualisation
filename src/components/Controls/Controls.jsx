import React from 'react';
import './Controls.scss';

const Controls = ({onReset, onPausePlay, onNext}) => (
	<div className="controls">
		<button onClick={onReset}>Reset <i className="mdi mdi-loop"></i></button>
		<button onClick={onPausePlay}>Play <i className="mdi mdi-play-pause"></i></button>
		<button onClick={onNext}>Next <i className="mdi mdi-skip-next"></i></button>
	</div>
);

export default Controls;