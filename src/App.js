import React, { useState } from 'react';

import Main from './pages/main';
import GAME_MODEL from './game.model';
import Game from './pages/game';
import EndGame from './pages/endgame';
import Footer from './components/footer';
import Header from './components/header';

import './styles.css';

function App() {
  const { GAME_STATUS } = GAME_MODEL;

  // hooks
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.NOT_STARTED);
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: '',
  });

  const [score, setScore] = useState({
    player1: 0,
    player2: 0,
    draws: 0,
  });


  const [winner, setWinner] = useState(null);

  // hooksChange functions
  function changeGameStatus(status) {
    setGameStatus(status);
  }

  const savePlayerNames = (fieldName) => (event) => {
    setPlayerNames({
      ...playerNames,
      [fieldName]: event.target.value,
    });
  };

  function increaseScore(player) {
    setScore({
      ...score,
      [player]: score[player] + 1,
    });
  }

  function restartGame() {
    setGameStatus(GAME_STATUS.RUNNING);
  }

  function restartGameWithOtherPlayers() {
    setPlayerNames({
      player1: '',
      player2: '',
    });
    setGameStatus(GAME_STATUS.NOT_STARTED);
    setScore({
      player1: 0,
      player2: 0,
      draws: 0,
    });
  }

  function render() {
    switch (gameStatus) {
      case GAME_STATUS.FINISHED:
        return (
          <EndGame
            winner={winner}
            playerNames={playerNames}
            score={score}
            restartGameWithOtherPlayers={restartGameWithOtherPlayers}
            restartGame={restartGame}
          />
        );

      case GAME_STATUS.NOT_STARTED:
        return (
          <Main
            changeGameStatus={changeGameStatus}
            savePlayerNames={savePlayerNames}
            playerNames={playerNames}
          />
        );

      case GAME_STATUS.RUNNING:
        return (
          <Game
            changeGameStatus={changeGameStatus}
            increaseScore={increaseScore}
            setWinner={setWinner}
            playerNames={playerNames}
            score={score}
          />
        );

      default:
        return (
          <div>
            <h1>Invalid game status</h1>
          </div>
        );
    }
  }


  return (
    <div>
      <Header restartGameWithOtherPlayers={restartGameWithOtherPlayers} />
      <div className="container">
        {render()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
