import React from 'react';
import './Index.scss';
import Board from 'components/Board/Board';

const Index = () => (
	<div className="index">
		<Board width={805} height={450} rows={25} cols={60} />
	</div>
);

export default Index;