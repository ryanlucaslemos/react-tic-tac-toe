
export function verifyWinner(playsMatrix) {
    const horizontalPoints = getHorizontalPoints(playsMatrix);
    const verticalPoints = getVerticalPoints(playsMatrix);
    console.log(verticalPoints);
};

export function verifyDraw(playsMatrix) {

}

function getHorizontalPoints(playsMatrix) {
    return playsMatrix.map(line => {
        return arraySum(line);
    })
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

function getArrayColumn(arr, n) {
    return arr.map(x => x[n]);
}