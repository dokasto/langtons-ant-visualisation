import React from 'react';
import './Controls.scss';

const PlayPauseButton = ({ isPaused, onClick }) => (
	<button onClick={onClick}>
		{isPaused ? 'Play' : 'Pause'}
		<i className={`mdi mdi-${isPaused ? 'play' : 'pause'}`} />
	</button>
);

const Controls = ({ onReset, isPaused, onPausePlay, onNext }) => (
	<div className="controls">
		<button onClick={onReset}>
			Reset <i className="mdi mdi-loop" />
		</button>
		<PlayPauseButton onClick={onPausePlay} isPaused={isPaused} />
		<button onClick={onNext}>
			Next <i className="mdi mdi-skip-next" />
		</button>
	</div>
);

export default Controls;
