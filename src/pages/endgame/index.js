import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import GAME_MODEL from '../../game.model';

const EndGame = ({ lastWinner, changePlaysMatrix, changeGameStatus }) => {
  const { GAME_STATUS } = GAME_MODEL;

  let alertText = 'Deu velha!!';
  let alertClass = 'end-game-alert-warning';


  if (lastWinner !== null) {
    alertText = `Parabéns ${lastWinner} você venceu!`;
    alertClass = 'end-game-alert-success';
  }

  const restartMatrix = () => {
    changePlaysMatrix([
      Array(3).fill(0),
      Array(3).fill(0),
      Array(3).fill(0),
    ]);
  };

  const playAgain = () => {
    restartMatrix();
    changeGameStatus(GAME_STATUS.RUNNING);
  };
  const playWithAnotherPlayers = () => {
    restartMatrix();
    changeGameStatus(GAME_STATUS.NOT_STARTED);
  };


  return (
    <div className="">
      <div className="row">
        <div className="end-game-alert">
          <h3 className={alertClass}>{alertText}</h3>
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={playAgain}
          className="restart"
        >
            Jogar novamente
        </button>

        <button
          type="button"
          onClick={playWithAnotherPlayers}
          className="change-players"
        >
            Jogar com outros jogadores
        </button>
      </div>
    </div>
  );
};

EndGame.propTypes = {
  lastWinner: PropTypes.string.isRequired,
  changePlaysMatrix: PropTypes.func.isRequired,
  changeGameStatus: PropTypes.func.isRequired,
};

export default EndGame;
