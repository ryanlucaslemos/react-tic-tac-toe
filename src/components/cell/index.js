import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import GAME_MODEL from '../../game.model';

const Cell = ({
  callbackParent, cellKey, cellContent, round,
}) => {
  const { MARK_ICONS_CSS_CLASS, MOVEMENT_VALUE, BORDERED_CELL_CSS_CLASSES } = GAME_MODEL;

  const classes = {
    [MOVEMENT_VALUE.PLAYER_1]: MARK_ICONS_CSS_CLASS.PLAYER_1,
    [MOVEMENT_VALUE.PLAYER_2]: MARK_ICONS_CSS_CLASS.PLAYER_2,
  };

  function makeAMove() {
    if (cellContent !== MOVEMENT_VALUE.EMPTY) return;

    const [parentIndex, index] = cellKey.split(' ');

    let newcellContent = null;

    if (round % 2 !== 0) {
      newcellContent = MOVEMENT_VALUE.PLAYER_1;
    } else {
      newcellContent = MOVEMENT_VALUE.PLAYER_2;
    }

    callbackParent(index, parentIndex, newcellContent);
  }

  return (
    <div
      className={`${
        BORDERED_CELL_CSS_CLASSES[cellKey] === undefined
          ? ''
          : BORDERED_CELL_CSS_CLASSES[cellKey]} cell`}
      onClick={makeAMove}
      onKeyDown={callbackParent}
      role="button"
      tabIndex={0}
    >
      <i className={classes[cellContent]} />
    </div>
  );
};

Cell.propTypes = {
  callbackParent: PropTypes.func.isRequired,
  cellKey: PropTypes.string.isRequired,
  cellContent: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};

export default Cell;
