import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';
import Ant from 'components/Ant/Ant';

const Index = () => (
	<div className="index">
		<div className="container">
			<Board width={805} height={450} rows={25} cols={60} />
			<Ant />
		</div>
	</div>
);

export default Index;