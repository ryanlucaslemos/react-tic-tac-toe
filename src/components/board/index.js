import React, { useState } from 'react';

import './styles.css';
import Cell from '../cell'
import GAME_MODEL from '../../game.model'
import { verifyWin, verifyDraw } from '../../services/gameVerification';


const Board = ({ playsMatrix, changePlaysMatrix, changeGameStatus, increaseScore }) => {


    const [round, setRound] = useState(1);

    const { PLAYERS: { PLAYER_1, PLAYER_2, NONE }, GAME_STATUS } = GAME_MODEL;

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
            <Cell key={cellKey} cellKey={cellKey} cell={cellValue} callbackParent={makeAMove(cellKey)} />
        );
    };


    const makeAMove = cellKey => () => {

        const [parentIndex, index] = cellKey.split(' ');

        let newPlayMatrix = playsMatrix.concat([]);

        if (newPlayMatrix[parentIndex][index] !== NONE.PLAY_VALUE) return;


        if (round % 2 !== 0) {
            newPlayMatrix[parentIndex][index] = PLAYER_1.PLAY_VALUE;
        } else {
            newPlayMatrix[parentIndex][index] = PLAYER_2.PLAY_VALUE;
        }


        let game = verifyWin(newPlayMatrix);

        if (round > 4 && game.done) {
            increaseScore(game.winner);
            changeGameStatus(GAME_STATUS.FINISHED);
        }

        else if (round > 6 && verifyDraw(playsMatrix, round)) {
            increaseScore();
            changeGameStatus(GAME_STATUS.FINISHED);
        }

        changePlaysMatrix(newPlayMatrix);
        setRound(round + 1)
    };

    return (
        <div className=''>
            {
                playsMatrix.map(renderLine)
            }

        </div>

    );

}

export default Board;