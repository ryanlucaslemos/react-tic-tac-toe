import React, { useState } from 'react';


import './styles.css'

const Main = () => {

    const [jogadores, setJogadores] = useState({'jogador1': '', 'jogador2': ''});

    const enviaJogadores = () => {
        console.log(jogadores);
    }

    const salvaNomeJogadores = fieldName => (event) => {
        setJogadores({
            ...jogadores,
            [fieldName]: event.target.value
        })
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
                            <input onChange={salvaNomeJogadores('jogador1')} type='text' value={jogadores.jogador1} />

                        </div>
                    </div>

                    <div className='users-box'>
                        <div className='row'>
                            <h5>Jogador 2</h5>
                        </div>
                        <div className='row'>
                    
                            <label>Nome:</label>
                            <input type='text' onChange={salvaNomeJogadores('jogador2')} value={jogadores.jogador2} />

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