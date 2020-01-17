import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Board from '../../components/board';
import ScoreBoard from '../../components/score-board';

import { getWinnerAndDraw } from '../../utils/gameVerification';

import GAME_MODEL from '../../game.model';

function Game({
  changeGameStatus,
  increaseScore,
  score,
  playerNames,
  setWinner,
}) {
  const { GAME_STATUS } = GAME_MODEL;

  function hasGameDone(newPlayMatrix, round) {
    const { winner, draw } = getWinnerAndDraw(newPlayMatrix, round);

    if (winner) {
      changeGameStatus(GAME_STATUS.FINISHED);
      setWinner(playerNames[winner]);
      increaseScore(winner);
    } else if (draw) {
      changeGameStatus(GAME_STATUS.FINISHED);
      setWinner(null);
      increaseScore('draw');
    }
  }

  return (
    <div className="game-container">
      <ScoreBoard playerNames={playerNames} score={score} />
      <Board hasGameDone={hasGameDone} />
    </div>
  );
}


Game.propTypes = {
  changeGameStatus: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  playerNames: PropTypes.instanceOf(Object).isRequired,
  score: PropTypes.instanceOf(Object).isRequired,
  setWinner: PropTypes.func.isRequired,
};

export default Game;
