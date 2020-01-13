import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Cell from '../cell';
import GAME_MODEL from '../../game.model';
import { verifyWin, verifyDraw } from '../../services/gameVerification';

const Board = ({
  playsMatrix, changePlaysMatrix, changeGameStatus, increaseScore,
}) => {
  const [round, setRound] = useState(1);

  const { PLAYERS: { PLAYER_1, PLAYER_2, NONE }, GAME_STATUS } = GAME_MODEL;

  const makeAMove = (cellKey) => () => {
    const [parentIndex, index] = cellKey.split(' ');

    const newPlayMatrix = playsMatrix.concat([]);

    if (newPlayMatrix[parentIndex][index] !== NONE.PLAY_VALUE) return;

    if (round % 2 !== 0) {
      newPlayMatrix[parentIndex][index] = PLAYER_1.PLAY_VALUE;
    } else {
      newPlayMatrix[parentIndex][index] = PLAYER_2.PLAY_VALUE;
    }

    const game = verifyWin(newPlayMatrix);

    if (round > GAME_MODEL.WIN.ROUND && game.done) {
      increaseScore(game.winner);
      changeGameStatus(GAME_STATUS.FINISHED);
    } else if (round > GAME_MODEL.DRAW.ROUND && verifyDraw(playsMatrix, round)) {
      increaseScore();
      changeGameStatus(GAME_STATUS.FINISHED);
    }

    changePlaysMatrix(newPlayMatrix);
    setRound(round + 1);
  };

  const renderCell = (parentKey) => (cellValue, index) => {
    const cellKey = `${parentKey} ${index}`;

    return (
      <Cell key={cellKey} cellKey={cellKey} cell={cellValue} callbackParent={makeAMove(cellKey)} />
    );
  };

  const renderLine = (line, index) => (
    <div className="board-row" key={index}>
      {line.map(renderCell(index))}
    </div>
  );

  return (
    <div className="board-style">
      { playsMatrix.map(renderLine) }
    </div>
  );
};

Board.propTypes = {
  playsMatrix: PropTypes.instanceOf(Array).isRequired,
  changePlaysMatrix: PropTypes.func.isRequired,
  changeGameStatus: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
};

export default Board;
