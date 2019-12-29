import GAME_MODEL from '../game.model'

export function verifyWin(playsMatrix) {

    if (hasPlayerOneWon(playsMatrix)) {
        return {
            'done': true,
            'winner': 'player1'
        }
    } else if (hasPlayerTwoWon(playsMatrix)) {
        return {
            'done': true,
            'winner': 'player2'
        }
    }

    return {
        'done': false,
    }
};

export function verifyDraw(playsMatrix, round) {
    const pointsMatrix = getPointsMatrix(playsMatrix);

    let drawPointsCount = pointsMatrix.filter(value => {
        if (round === 8 && value === - 2) {
            return true;
        }
        return value === -1 || value === 0 || value === 1;
    }).length;

    return drawPointsCount === pointsMatrix.length;
}

function getHorizontalPoints(playsMatrix) {
    return playsMatrix.map(line => {
        return arraySum(line);
    })
}

function getDiagonalPoints(playsMatrix) {
    return [playsMatrix[0][0] + playsMatrix[1][1] + playsMatrix[2][2], playsMatrix[0][2] + playsMatrix[1][1] + playsMatrix[2][0]];
}

function getVerticalPoints(playsMatrix) {
    return [
        arraySum(getArrayColumn(playsMatrix, 0)),
        arraySum(getArrayColumn(playsMatrix, 1)),
        arraySum(getArrayColumn(playsMatrix, 2))
    ];
}

function arraySum(array) {
    return array.reduce((a, b) => a + b, 0)
}

function getArrayColumn(arr, columnNumber) {
    return arr.map(x => x[columnNumber]);
}

function hasPlayerOneWon(playsMatrix) {

    const pointsMatrix = getPointsMatrix(playsMatrix);
    const isWinner = pointsMatrix.find(val => val === GAME_MODEL.PLAYERS.PLAYER_1.WIN_VALUE) !== undefined;
    return isWinner;
}


function hasPlayerTwoWon(playsMatrix) {
    const pointsMatrix = getPointsMatrix(playsMatrix);
    const isWinner = pointsMatrix.find(val => val === GAME_MODEL.PLAYERS.PLAYER_2.WIN_VALUE) !== undefined;
    return isWinner;
}

function getPointsMatrix(playsMatrix) {
    let pointsMatrix = getHorizontalPoints(playsMatrix).concat(getVerticalPoints(playsMatrix));

    pointsMatrix =  pointsMatrix.concat(getDiagonalPoints(playsMatrix));

    return pointsMatrix;
}