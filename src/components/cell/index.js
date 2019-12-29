import React from 'react';

import './styles.css'
import GAME_MODEL from '../../game.model';

const Cell = ({ cell, callbackParent, cellKey }) => {

    let classe = '';

    if (cell === GAME_MODEL.PLAYERS.PLAYER_2.PLAY_VALUE) {
        classe = GAME_MODEL.PLAYERS.PLAYER_2.CSS_CLASS;
    } else if (cell === GAME_MODEL.PLAYERS.PLAYER_1.PLAY_VALUE) {
        classe = GAME_MODEL.PLAYERS.PLAYER_1.CSS_CLASS;
    }

    return (
        <div className={`${GAME_MODEL.CELL_STYLES[cellKey]} cell`} onClick={callbackParent}>
            <i className={classe}></i>
        </div>
    );
}

export default Cell; 