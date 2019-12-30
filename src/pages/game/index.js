import React from 'react';

import './styles.css';
import Board from '../../components/board';


const Game = ({ changeGameStatus, increaseScore, playsMatrix, changePlaysMatrix }) => {
    return (
        <Board playsMatrix={playsMatrix} changePlaysMatrix={changePlaysMatrix} changeGameStatus={changeGameStatus} increaseScore={increaseScore} />
    );
}

export default Game;