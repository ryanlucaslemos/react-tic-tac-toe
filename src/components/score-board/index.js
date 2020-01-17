import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import GAME_MODEL from '../../game.model';

const ScoreBoard = ({ playerNames, score }) => {
  const [draws, setDraws] = useState(0);

  // eslint-disable-next-line no-unused-vars
  function increaseDraws() {
    setDraws(draws + 1);
  }

  const { MARK_ICONS_CSS_CLASS } = GAME_MODEL;

  return (
    <div>
      <div className="score-board-row">
        <div className="score-board">
          <h4>{playerNames.player1}</h4>
          <p>
            <b>Vitórias:</b>
            {' '}
            {score.player1}
          </p>
          <hr />
          <i className={MARK_ICONS_CSS_CLASS.PLAYER_1} />
        </div>
        <h4 className="draws-style">
          Empates:
          {' '}
          {draws}
        </h4>
        <div className="score-board">
          <h4>{playerNames.player2}</h4>
          <p>
            <b>Vitórias:</b>
            {' '}
            {score.player2}
          </p>
          <hr />
          <i className={MARK_ICONS_CSS_CLASS.PLAYER_2} />
        </div>
      </div>

    </div>
  );
};

ScoreBoard.propTypes = {
  playerNames: PropTypes.instanceOf(Object).isRequired,
  score: PropTypes.instanceOf(Object).isRequired,
};

export default ScoreBoard;
