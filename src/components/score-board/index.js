import React from 'react';

import './styles.css'
import GAME_MODEL from '../../game.model';

const ScoreBoard = ({ players, draws }) => {
    const { PLAYERS: { PLAYER_1, PLAYER_2 } } = GAME_MODEL;
    return (
        <div>
            <div className='score-board-row'>
                <div className='score-board'>
                    <h4>{players.player1.name}</h4>
                    <p><b>Vitórias:</b> {players.player1.wins}</p>
                    <hr />
                    <i className={PLAYER_1.CSS_CLASS}></i>
                </div>
                <h4 className='draws-style'>Empates: {draws}</h4>
                <div className='score-board'>
                    <h4>{players.player2.name}</h4>
                    <p><b>Vitórias:</b> {players.player2.wins}</p>
                    <hr />
                    <i className={PLAYER_2.CSS_CLASS}></i>
                </div>
            </div>
            
        </div>
    );
}

export default ScoreBoard;