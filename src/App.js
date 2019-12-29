import React, { useState } from 'react';

import Main from './pages/main'
import GAME_MODEL from './game.model'
import Game from './pages/game';
import EndGame from './pages/endgame';
import ScoreBoard from './components/score-board';

function App() {
  const { GAME_STATUS } = GAME_MODEL;

  //hooks
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.NOT_STARTED);
  const [players, setPlayers] = useState({
    'player1': {
      'name': '',
      'wins': 0
    },
    'player2': {
      'name': '',
      'wins': 0
    }
  });

  const [lastWinner, setLastWinner] = useState(null);

  const [draws, setDraws] = useState(0);


  const [playsMatrix, setPlaysMatrix] = useState([
    Array(3).fill(0),
    Array(3).fill(0),
    Array(3).fill(0)
  ]);


  //hooksChange functions
  const changeGameStatus = (status) => {
    setGameStatus(status);
  }
  const changeLastWinner = (name) => {
    setLastWinner(name);
  }

  const savePlayerNames = fieldName => (event) => {
    setPlayers({
      ...players,
      [fieldName]: {
        'name': event.target.value,
        'wins': 0
      }
    });
  };

  const increaseWins = (player) => {
    changeLastWinner(players[player].name);

    setPlayers({
      ...players,
      [player]: {
        'name': players[player].name,
        'wins': players[player].wins + 1
      }
    });
  };

  const increaseDraws = () => {
    changeLastWinner(null);
    setDraws(draws + 1);
  };

  const changePlaysMatrix = (playsMatrix) => {
    setPlaysMatrix(playsMatrix)
  };

  if (gameStatus === GAME_STATUS.NOT_STARTED) {
    return (
      <div className='container'>
        <Main changeGameStatus={changeGameStatus} savePlayerNames={savePlayerNames} players={players} />
      </div>
    );
  }
  else if (gameStatus === GAME_STATUS.FINISHED) {
    return (
      <div className='container'>
        <ScoreBoard players={players} draws={draws} />
        <EndGame changeGameStatus={changeGameStatus} changePlaysMatrix={changePlaysMatrix} lastWinner={lastWinner} />
      </div>

    );
  }

  return (
    <div className='container'>
      <ScoreBoard players={players} draws={draws} />
      <Game playsMatrix={playsMatrix} changePlaysMatrix={changePlaysMatrix} players={players} increaseWins={increaseWins} changeGameStatus={changeGameStatus} increaseDraws={increaseDraws} />
    </div>
  );
}

export default App;
