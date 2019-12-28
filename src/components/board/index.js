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
                {linha.map(renderizaCelula(index))}
            </div>
        );
    }

    const renderizaCelula = parentKey => (celula, index) => {

        const cellKey = `${parentKey} ${index}`;

        const makeAPlay = () => {
            let newPlayMatrix = playsMatrix.concat([]);

            const [parentIndex, index] = cellKey.split(' ')
            

            newPlayMatrix[parentIndex][index] = newPlayMatrix[parentIndex][index] === 0 ? 1 : -1;
            
            setPlaysMatrix(newPlayMatrix);

            //console.log(playsMatrix)
        };

        return (
            <Cell key={cellKey} cell={celula} callbackParent={makeAPlay} />
        );
    };

    return (
        <div className='container'>
            {
                console.log(playsMatrix)
            }
            {
                playsMatrix.map(renderizaLinha)
            }

        </div>

    );

}

export default Board;