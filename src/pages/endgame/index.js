import React from 'react';
import PropTypes from 'prop-types';

import ScoreBoard from '../../components/score-board';
import './styles.css';


const EndGame = ({
  restartGame, playerNames, score, winner, restartGameWithOtherPlayers,
}) => {
  let alertText = 'Deu velha!!';
  let alertClass = 'end-game-alert-warning';

  if (winner !== null) {
    alertText = `Parabéns ${winner} você venceu!`;
    alertClass = 'end-game-alert-success';
  }

  return (
    <>
      <ScoreBoard playerNames={playerNames} score={score} />
      <div className="row">
        <div className={`end-game-alert ${alertClass}`}>
          <h3>{alertText}</h3>
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={restartGame}
          className="restart"
        >
          Jogar novamente
        </button>

        <button
          type="button"
          onClick={restartGameWithOtherPlayers}
          className="change-players"
        >
          Jogar com outros jogadores
        </button>
      </div>
    </>
  );
};

EndGame.propTypes = {
  winner: PropTypes.string,
  restartGame: PropTypes.func.isRequired,
  restartGameWithOtherPlayers: PropTypes.func.isRequired,
  playerNames: PropTypes.instanceOf(Object).isRequired,
  score: PropTypes.instanceOf(Object).isRequired,
};

EndGame.defaultProps = {
  winner: null,
};

export default EndGame;
