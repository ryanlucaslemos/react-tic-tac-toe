
const GAME_MODEL = {
  PLAYERS: {
    PLAYER_1: {
      CSS_CLASS: 'fas fa-times fa-2x',
      PLAY_VALUE: 1,
      WIN_VALUE: 3,
    },
    PLAYER_2: {
      CSS_CLASS: 'far fa-circle fa-2x',
      PLAY_VALUE: -1,
      WIN_VALUE: -3,
    },
    NONE: {
      PLAY_VALUE: 0,
    },
  },
  GAME_STATUS: {
    NOT_STARTED: 0,
    RUNNING: 1,
    FINISHED: 2,
  },
  CELL_STYLES: {
    '0 1': 'v-border',
    '1 0': 'h-border',
    '1 1': 'v-border h-border',
    '1 2': 'h-border',
    '2 1': 'v-border',
  },
  DRAW: {
    ROUND: 7,
  },
  WIN: {
    ROUND: 4,
  },
  ROUNDS: 9,
};

export default GAME_MODEL;
