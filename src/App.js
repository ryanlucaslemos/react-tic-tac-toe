import React, { useState, useEffect } from 'react';

import Main from './pages/main';
import GAME_MODEL from './game.model';
import Game from './pages/game';
import EndGame from './pages/endgame';
import ScoreBoard from './components/score-board';
import Footer from './components/footer';
import Header from './components/header';

import './styles.css';

function App() {
  const { GAME_STATUS } = GAME_MODEL;

  // hooks
  const [gameStatus, setGameStatus] = useState(null);
  const [players, setPlayers] = useState({});

  const [lastWinner, setLastWinner] = useState(null);

  const [draws, setDraws] = useState(0);

  const [playsMatrix, setPlaysMatrix] = useState([]);

  const startGame = (continueGame = false) => {
    setPlaysMatrix([
      Array(3).fill(0),
      Array(3).fill(0),
      Array(3).fill(0),
    ]);

    if (continueGame) {
      setGameStatus(GAME_STATUS.RUNNING);
    } else {
      setDraws(0);
      setGameStatus(GAME_STATUS.NOT_STARTED);
      setPlayers({
        player1: {
          name: '',
          wins: 0,
        },
        player2: {
          name: '',
          wins: 0,
        },
      });
    }
  };

  useEffect(() => {
    startGame();
    // eslint-disable-next-line
  }, []);

  // hooksChange functions
  const changeGameStatus = (status) => {
    setGameStatus(status);
  };
  const changeLastWinner = (name) => {
    setLastWinner(name);
  };

  const savePlayerNames = (fieldName) => (event) => {
    setPlayers({
      ...players,
      [fieldName]: {
        name: event.target.value,
        wins: 0,
      },
    });
  };

  const increaseWins = (player) => {
    changeLastWinner(players[player].name);

    setPlayers({
      ...players,
      [player]: {
        name: players[player].name,
        wins: players[player].wins + 1,
      },
    });
  };

  const increaseDraws = () => {
    changeLastWinner(null);
    setDraws(draws + 1);
  };

  const increaseScore = (player = null) => {
    if (player === null) {
      increaseDraws();
      return;
    }
    increaseWins(player);
  };

  const changePlaysMatrix = (playMatrix) => {
    setPlaysMatrix(playMatrix);
  };

  const render = () => {
    switch (gameStatus) {
      case GAME_STATUS.FINISHED:
        return (
          <div>
            <ScoreBoard players={players} draws={draws} />
            <EndGame
              startGame={startGame}
              lastWinner={lastWinner}
            />
          </div>
        );

      case GAME_STATUS.NOT_STARTED:
        return (
          <Main
            changeGameStatus={changeGameStatus}
            savePlayerNames={savePlayerNames}
            players={players}
          />
        );

      case GAME_STATUS.RUNNING:
        return (
          <div>
            <ScoreBoard players={players} draws={draws} />
            <Game
              playsMatrix={playsMatrix}
              changePlaysMatrix={changePlaysMatrix}
              increaseScore={increaseScore}
              changeGameStatus={changeGameStatus}
            />
          </div>
        );

      default:
        return (
          <div>
            <h1>Invalid game status</h1>
          </div>
        );
    }
  };


  return (
    <div>
      <Header startGame={startGame} />
      <div className="container">
        {render()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
