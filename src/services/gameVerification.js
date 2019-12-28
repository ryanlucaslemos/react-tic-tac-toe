import ENV from '../env'

export function verifyWin(playsMatrix) {

    if (hasPlayerOneWon(playsMatrix)) {
        return {
            'done': true,
            'winner': 'PLAYER_1'
        }
    } else if (hasPlayerTwoWon(playsMatrix)) {
        return {
            'done': true,
            'winner': 'PLAYER_2'
        }
    }

    return {
        'done': false,
    }
};

export function verifyDraw(playsMatrix) {

}

function getHorizontalPoints(playsMatrix) {
    return playsMatrix.map(line => {
        return arraySum(line);
    })
}

function getDiagonalPoints(playsMatrix) {
    return playsMatrix[0][0] + playsMatrix[1][1] + playsMatrix[2][2];
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

    const pointsMatrix = getPointsMatrix(playsMatrix)
    const isWinner = pointsMatrix.find(val => val === ENV.PLAYERS.PLAYER_1.WIN_VALUE) !== undefined;
    return isWinner;
}


function hasPlayerTwoWon(playsMatrix) {
    const pointsMatrix = getPointsMatrix(playsMatrix)
    const isWinner = pointsMatrix.find(val => val === ENV.PLAYERS.PLAYER_2.WIN_VALUE) !== undefined;
    return isWinner;
}

function getPointsMatrix(playsMatrix) {
    let pointsMatrix = getHorizontalPoints(playsMatrix).concat(getVerticalPoints(playsMatrix));
    
    pointsMatrix.push(getDiagonalPoints(playsMatrix));
    
    return pointsMatrix;
}