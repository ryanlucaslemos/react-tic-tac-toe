import React from 'react';


import './styles.css'

import GAME_MODEL from '../../game.model';

const Main = ({ changeGameStatus, players, savePlayerNames }) => {

    const enviaJogadores = (evt) => {
        evt.preventDefault();
        if (players.player1.name === '' || players.player2.name === '') {
            alert('Você deve preencher os nomes dos jogadores');
            return;
        }
        changeGameStatus(GAME_MODEL.GAME_STATUS.RUNNING);
    }

    return (
        <form onSubmit={enviaJogadores} noValidate>
            <div className=''>
                <div className='row'>
                    <div className='users-box'>
                        <div className='row'>
                            <h5 className='center'>Jogador 1</h5>
                        </div>
                        <div className='row'>

                            <label>Nome:</label>
                            <input onChange={savePlayerNames('player1')} type='text' value={players.player1.name} />

                        </div>
                    </div>

                    <div className='users-box'>
                        <div className='row'>
                            <h5>Jogador 2</h5>
                        </div>
                        <div className='row'>

                            <label>Nome:</label>
                            <input type='text' onChange={savePlayerNames('player2')} value={players.player2.name} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <button type='submit'>Jogar</button>
                </div>
            </div>
        </form>

    );
};

export default Main;