import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const EndGame = ({ lastWinner, startGame }) => {
  let alertText = 'Deu velha!!';
  let alertClass = 'end-game-alert-warning';


  if (lastWinner !== null) {
    alertText = `Parabéns ${lastWinner} você venceu!`;
    alertClass = 'end-game-alert-success';
  }

  const playAgain = () => {
    startGame(true);
  };
  const playWithAnotherPlayers = () => {
    startGame();
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
  lastWinner: PropTypes.string,
  startGame: PropTypes.func.isRequired,
};

EndGame.defaultProps = {
  lastWinner: null,
};

export default EndGame;
