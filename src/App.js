import React, { useState } from 'react';

import Main from './pages/main'
import Board from './components/board';
import ENV from './env'

function App() {
  const [gameStatus, setGameStatus] = useState(ENV.GAME_STATUS.NOT_STARTED);
  const [playersNames, setNames] = useState({ 'player1': '', 'player2': '' });

  const changeGameStatus = (status) => {
    setGameStatus(status);
  }
  const savePlayerNames = fieldName => (event) => {
    setNames({
      ...playersNames,
      [fieldName]: event.target.value
    });
  }

  if (gameStatus === ENV.GAME_STATUS.NOT_STARTED) {
    return (
      <Main changeGameStatus={changeGameStatus} savePlayerNames={savePlayerNames} playersNames={playersNames} />
    );
  }

  return (
    <Board playersNames={playersNames} />
  );
}

export default App;
