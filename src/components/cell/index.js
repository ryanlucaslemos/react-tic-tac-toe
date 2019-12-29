import React from 'react';

import './styles.css'
import GAME_MODEL from '../../game.model';

const Cell = ({ cell, callbackParent, cellKey }) => {
    const { PLAYERS: { PLAYER_1, PLAYER_2 } } = GAME_MODEL;

    let classe = '';

    if (cell === PLAYER_2.PLAY_VALUE) {
        classe = PLAYER_2.CSS_CLASS;
    } else if (cell === PLAYER_1.PLAY_VALUE) {
        classe = PLAYER_1.CSS_CLASS;
    }

    return (
        <div className={`${GAME_MODEL.CELL_STYLES[cellKey] === undefined ? '' : GAME_MODEL.CELL_STYLES[cellKey]} cell`} onClick={callbackParent}>
            <i className={classe}></i>
        </div>
    );
}

export default Cell; 