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
    (val) => val === GAME_MODEL.WIN_WITH.PLAYER_1,
  ) !== undefined;

  return isWinner;
}


function hasPlayerTwoWon(playsMatrix) {
  const pointsMatrix = getPointsMatrix(playsMatrix);
  const isWinner = pointsMatrix.find(
    (val) => val === GAME_MODEL.WIN_WITH.PLAYER_2,
  ) !== undefined;

  return isWinner;
}


function getCanWinValues(round) {
  const { MOVEMENT_VALUE, ROUNDS } = GAME_MODEL;

  const canWinValues = [MOVEMENT_VALUE.PLAYER_1 * 2];

  if (round === ROUNDS - 1) canWinValues.push(MOVEMENT_VALUE.PLAYER_2 * 2);

  return canWinValues;
}

function draw(playsMatrix, round) {
  const { MIN_ROUND } = GAME_MODEL;

  if (round < MIN_ROUND.DRAW) {
    return null;
  }

  const pointsMatrix = getPointsMatrix(playsMatrix);

  const canWinValues = getCanWinValues(round);

  return pointsMatrix.find(
    (value) => canWinValues[0] === value || canWinValues[-1] === value,
  ) === undefined;
}


function winner(playsMatrix, round) {
  const { MIN_ROUND } = GAME_MODEL;
  if (round < MIN_ROUND.WIN) {
    return null;
  }

  if (hasPlayerOneWon(playsMatrix)) {
    return 'player1';
  }

  if (hasPlayerTwoWon(playsMatrix)) {
    return 'player2';
  }

  return null;
}

export function getWinnerAndDraw(playsMatrix, round) {
  return {
    winner: winner(playsMatrix, round),
    draw: draw(playsMatrix, round),
  };
}
