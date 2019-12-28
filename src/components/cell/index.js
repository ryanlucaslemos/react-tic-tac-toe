import React from 'react';

import './styles.css'
import ENV from '../../env';

const Cell = ({ cell, callbackParent }) => {

    let classe = '';

    if (cell === ENV.PLAYERS.PLAYER_2.PLAY_VALUE) {
        classe = ENV.PLAYERS.PLAYER_2.CSS_CLASS;
    } else if (cell === ENV.PLAYERS.PLAYER_1.PLAY_VALUE) {
        classe = ENV.PLAYERS.PLAYER_1.CSS_CLASS;
    }

    return (
        <div className='cell' onClick={callbackParent}>
            <i className={classe}></i>
        </div>
    );
}

export default Cell; 