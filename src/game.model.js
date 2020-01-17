
const GAME_MODEL = {
  MOVEMENT_VALUE: {
    PLAYER_1: 1,
    PLAYER_2: -1,
    EMPTY: 0,
  },

  MARK_ICONS_CSS_CLASS: {
    PLAYER_1: 'fas fa-times fa-2x',
    PLAYER_2: 'far fa-circle fa-2x',
  },

  WIN_WITH: {
    PLAYER_1: 3,
    PLAYER_2: -3,
  },

  GAME_STATUS: {
    NOT_STARTED: 0,
    RUNNING: 1,
    FINISHED: 2,
  },

  BORDERED_CELL_CSS_CLASSES: {
    '0 1': 'v-border',
    '1 0': 'h-border',
    '1 1': 'v-border h-border',
    '1 2': 'h-border',
    '2 1': 'v-border',
  },

  MIN_ROUND: {
    DRAW: 7,
    WIN: 4,
  },

  ROUNDS: 9,
};

export default GAME_MODEL;
