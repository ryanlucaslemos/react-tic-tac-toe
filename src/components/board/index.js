import React, { useState } from 'react';

import './styles.css';
import Cell from '../cell'
import ENV from '../../env'
import { verifyWin, verifyDraw } from '../../services/gameVerification';


const Board = ({ playersNames }) => {
    const [playsMatrix, setPlaysMatrix] = useState([
        Array(3).fill(0),
        Array(3).fill(0),
        Array(3).fill(0)
    ]);

    const [round, setRound] = useState(1);

    const renderLine = (line, index) => {
        return (
            <div className='board-row' key={index}>
                {line.map(renderCell(index))}
            </div>
        );
    }

    const renderCell = parentKey => (cellValue, index) => {

        const cellKey = `${parentKey} ${index}`;

        return (
            <Cell key={cellKey} cell={cellValue} callbackParent={makeAMove(cellKey)} />
        );
    };


    const makeAMove = cellKey => () => {

        const [parentIndex, index] = cellKey.split(' ');

        let newPlayMatrix = playsMatrix.concat([]);

        if (newPlayMatrix[parentIndex][index] !== ENV.PLAYERS.NONE.PLAY_VALUE) return;

        if (round % 2 !== 0) {
            newPlayMatrix[parentIndex][index] = ENV.PLAYERS.PLAYER_1.PLAY_VALUE;
        } else {
            newPlayMatrix[parentIndex][index] = ENV.PLAYERS.PLAYER_2.PLAY_VALUE;
        }

        if (round > 4) {
            let game = verifyWin(newPlayMatrix);

            if (game.done) {
                alert(`O jogador ${playersNames[game.winner]} venceu`)
            }
        }

        if (round > 6) {
            if (verifyDraw(playsMatrix, round)) {
                alert('Deu velha!');
            }
        }

        setPlaysMatrix(newPlayMatrix);
        setRound(round + 1)
    };

    return (
        <div className='container'>
            {
                playsMatrix.map(renderLine)
            }

        </div>

    );

}

export default Board;