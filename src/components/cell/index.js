import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import GAME_MODEL from '../../game.model';

const Cell = ({ cell, callbackParent, cellKey }) => {
  const { PLAYERS: { PLAYER_1, PLAYER_2 } } = GAME_MODEL;

  let classe = '';

  if (cell === PLAYER_2.PLAY_VALUE) {
    classe = PLAYER_2.CSS_CLASS;
  } else if (cell === PLAYER_1.PLAY_VALUE) {
    classe = PLAYER_1.CSS_CLASS;
  }

  return (
    <div
      className={`${
        GAME_MODEL.CELL_STYLES[cellKey] === undefined
          ? ''
          : GAME_MODEL.CELL_STYLES[cellKey]} cell`}
      onClick={callbackParent}
      onKeyDown={callbackParent}
      role="button"
      tabIndex={0}
    >
      <i className={classe} />
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.number.isRequired,
  callbackParent: PropTypes.func.isRequired,
  cellKey: PropTypes.string.isRequired,
};

export default Cell;
