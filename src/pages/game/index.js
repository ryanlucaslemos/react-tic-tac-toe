import React from 'react';

import './styles.css';
import Board from '../../components/board';


const Game = ({ players }) => {
    return (
        <div className='container'>
            <Board players={players} />
        </div>
    );
}

export default Game;