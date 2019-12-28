import React, { useState } from 'react';

import './styles.css';
import Cell from '../cell'

const Board = () => {
    const [playsMatrix, setPlaysMatrix] = useState([
        Array(3).fill(0),
        Array(3).fill(0),
        Array(3).fill(0)
    ]);

    const renderizaLinha = (linha, index) => {
        
        return (
            <div className='board-row' key={index}>
                { linha.map(renderizaCelula(index)) }
            </div>
        );
    } 

    const renderizaCelula = parentKey => (celula, index) => {
        const cellKey = `${parentKey} ${index}`
        return (
            <Cell key={cellKey} cellKey={cellKey} playsMatrix={playsMatrix} cell={celula} onClick={makeAPlay} />
        );
    }

    const makeAPlay = (newPlayMatrix) => {
        
        setPlaysMatrix(newPlayMatrix);
        
    }

    return (
        <div className='container'>
            {
                playsMatrix.map(renderizaLinha)
            }
        </div>

    );

}

export default Board;