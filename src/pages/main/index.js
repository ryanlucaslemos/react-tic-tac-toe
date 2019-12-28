import React from 'react';


import './styles.css'

import ENV from '../../env';

const Main = ({ changeGameStatus, playersNames, savePlayerNames }) => {

    const enviaJogadores = () => {
        if (playersNames.player1 === '' || playersNames.player2 === '') {
            alert('Você deve preencher os nomes dos jogadores');
            return;
        }
        changeGameStatus(ENV.GAME_STATUS.RUNNING);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='users-box'>
                        <div className='row'>
                            <h5 className='center'>Jogador 1</h5>
                        </div>
                        <div className='row'>

                            <label>Nome:</label>
                            <input onChange={savePlayerNames('player1')} type='text' value={playersNames.player1} />

                        </div>
                    </div>

                    <div className='users-box'>
                        <div className='row'>
                            <h5>Jogador 2</h5>
                        </div>
                        <div className='row'>

                            <label>Nome:</label>
                            <input type='text' onChange={savePlayerNames('player2')} value={playersNames.jogador2} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <button onClick={enviaJogadores}>Jogar</button>
                </div>
            </div>
        </div>

    );
};

export default Main;