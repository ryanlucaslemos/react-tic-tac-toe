import React from 'react';

import './styles.css'

const Cell = ({cell, callbackParent}) => {

    let classe = '';
    
    if (cell === 1) {
        classe = 'far fa-2x fa-circle';
    } else if (cell === -1) {
        classe = 'fas fa-2x fa-times';
    }

    return (
        <div className='cell' onClick={callbackParent}>
            <i className={classe}></i>
        </div>
    );
}

export default Cell; 