import React, { useState } from 'react';

import Main from './pages/main'
import GAME_MODEL from './game.model'
import Game from './pages/game';

function App() {
  const [gameStatus, setGameStatus] = useState(GAME_MODEL.GAME_STATUS.NOT_STARTED);
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

  const changeGameStatus = (status) => {
    setGameStatus(status);
  }
  const savePlayerNames = fieldName => (event) => {
    setPlayers({
      ...players,
      [fieldName]: {
        'name': event.target.value,
        'wins': 0
      }
    });
  }

  if (gameStatus === GAME_MODEL.GAME_STATUS.NOT_STARTED) {
    return (
      <Main changeGameStatus={changeGameStatus} savePlayerNames={savePlayerNames} players={players} />
    );
  }

  return (
    <Game players={players}/>
  );
}

export default App;
