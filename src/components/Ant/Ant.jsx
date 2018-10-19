import React from 'react';
import './Ant.scss';

// nav top and left = 16px
const Ant = ({posX = 0, posY = 0}) => (
    <span className="ant" style={{ top: `${posY}px`, left: `${posX}px`}}>&nbsp;</span>
);

export default Ant;