import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Header = ({ startGame }) => (
  <header onClick={() => startGame()} onKeyDown={startGame} role="button" tabIndex={0}>
    <i className="fab fa-react" />
    {' '}
React Tic-tac-toe
    {' '}
    <i className="fab fa-slack-hash" />
  </header>
);

Header.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default Header;
