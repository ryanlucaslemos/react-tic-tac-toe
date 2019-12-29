import React from 'react';

import './styles.css';
import Board from '../../components/board';


const Game = ({ players, changeGameStatus, increaseWins, increaseDraws, playsMatrix, changePlaysMatrix }) => {
    return (
        <Board playsMatrix={playsMatrix} changePlaysMatrix={changePlaysMatrix} players={players} changeGameStatus={changeGameStatus} increaseWins={increaseWins} increaseDraws={increaseDraws} />
    );
}

export default Game;