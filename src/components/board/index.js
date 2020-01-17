import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Cell from '../cell';

const Board = ({ hasGameDone }) => {
  const [round, setRound] = useState(1);

  const [playsMatrix, setPlaysMatrix] = useState([]);

  useEffect(() => {
    setPlaysMatrix([
      Array(3).fill(0),
      Array(3).fill(0),
      Array(3).fill(0),
    ]);
  }, []);

  function changeBoard(index, parentIndex, value) {
    const newPlayMatrix = playsMatrix.concat([]);
    newPlayMatrix[parentIndex][index] = value;
    setPlaysMatrix(newPlayMatrix);
    setRound(round + 1);
    hasGameDone(newPlayMatrix, round);
  }

  const renderCell = (parentKey) => (cellContent, index) => {
    const cellKey = `${parentKey} ${index}`;

    return (
      <Cell
        key={cellKey}
        cellKey={cellKey}
        cellContent={cellContent}
        callbackParent={changeBoard}
        round={round}
      />
    );
  };

  const renderLine = (line, index) => (
    <div className="board-row" key={index}>
      {line.map(renderCell(index))}
    </div>
  );

  return (
    <div className="board-style">
      {playsMatrix.map(renderLine)}
    </div>
  );
};

Board.propTypes = {
  hasGameDone: PropTypes.func.isRequired,
};

export default Board;
