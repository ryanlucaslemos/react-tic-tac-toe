import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Board from '../../components/board';


const Game = ({
  changeGameStatus,
  increaseScore,
  playsMatrix,
  changePlaysMatrix,
}) => (

  <Board
    playsMatrix={playsMatrix}
    changePlaysMatrix={changePlaysMatrix}
    changeGameStatus={changeGameStatus}
    increaseScore={increaseScore}
  />
);

Game.propTypes = {
  changeGameStatus: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  playsMatrix: PropTypes.instanceOf(Array).isRequired,
  changePlaysMatrix: PropTypes.func.isRequired,
};

export default Game;
