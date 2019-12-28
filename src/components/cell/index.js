import React, { useState } from 'react';

import './styles.css'

const Cell = ({cell, playsMatrix, cellKey, onClick}) => {

    const [classe, setClasse] = useState(cell === 1 ? 'far fa-2x fa-circle' : '');

    function makeAPlay(event) {
        // Here, we invoke the callback with the new value
        let newPlayMatrix = playsMatrix;
        const [parentIndex, index] = cellKey.split(' ')
        newPlayMatrix[parentIndex][index] = 1;
        setClasse('far fa-2x fa-circle')
        onClick(newPlayMatrix);
    }

    return (
        <div className='cell' onClick={makeAPlay}>
            <i className={classe}></i>
        </div>
    );
}

export default Cell; 