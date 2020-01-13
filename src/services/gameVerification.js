import GAME_MODEL from '../game.model';

function arraySum(array) {
  return array.reduce((a, b) => a + b, 0);
}

function getHorizontalPoints(playsMatrix) {
  return playsMatrix.map((line) => arraySum(line));
}

function getDiagonalPoints(playsMatrix) {
  return [
    playsMatrix[0][0] + playsMatrix[1][1] + playsMatrix[2][2],
    playsMatrix[0][2] + playsMatrix[1][1] + playsMatrix[2][0],
  ];
}

function getArrayColumn(arr, columnNumber) {
  return arr.map((x) => x[columnNumber]);
}

function getVerticalPoints(playsMatrix) {
  return [
    arraySum(getArrayColumn(playsMatrix, 0)),
    arraySum(getArrayColumn(playsMatrix, 1)),
    arraySum(getArrayColumn(playsMatrix, 2)),
  ];
}

function getPointsMatrix(playsMatrix) {
  let pointsMatrix = getHorizontalPoints(playsMatrix).concat(getVerticalPoints(playsMatrix));

  pointsMatrix = pointsMatrix.concat(getDiagonalPoints(playsMatrix));

  return pointsMatrix;
}

function hasPlayerOneWon(playsMatrix) {
  const pointsMatrix = getPointsMatrix(playsMatrix);
  const isWinner = pointsMatrix.find(
    (val) => val === GAME_MODEL.PLAYERS.PLAYER_1.WIN_VALUE,
  ) !== undefined;

  return isWinner;
}


function hasPlayerTwoWon(playsMatrix) {
  const pointsMatrix = getPointsMatrix(playsMatrix);
  const isWinner = pointsMatrix.find(
    (val) => val === GAME_MODEL.PLAYERS.PLAYER_2.WIN_VALUE,
  ) !== undefined;

  return isWinner;
}


function isADrawValue(value, round) {
  const { DRAW: { PLAY_VALUES }, PLAYERS: { PLAYER_1 }, ROUNDS } = GAME_MODEL;

  if (round === ROUNDS - 1 && value === PLAYER_1.PLAY_VALUE * 2) return true;

  return PLAY_VALUES.find((val) => (value === val)) !== undefined;
}

export function verifyDraw(playsMatrix, round) {
  const pointsMatrix = getPointsMatrix(playsMatrix);

  const drawPointsCount = pointsMatrix.filter((value) => isADrawValue(value, round)).length;

  return drawPointsCount === pointsMatrix.length;
}

export function verifyWin(playsMatrix) {
  if (hasPlayerOneWon(playsMatrix)) {
    return {
      done: true,
      winner: 'player1',
    };
  } if (hasPlayerTwoWon(playsMatrix)) {
    return {
      done: true,
      winner: 'player2',
    };
  }

  return {
    done: false,
  };
}
