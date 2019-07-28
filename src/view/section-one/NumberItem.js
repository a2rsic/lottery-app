import React, { useState } from 'react';

import './NumberItem.css'

const NumberItem = (props) => {

    const [isSelected, setSelected] = useState(false);
    const { number: i, onNumberSelect, canSelect } = props;

    const backgroundColor = isSelected ? 'red' : 'green';

    const onNumberClick = (event) => {
        const { value } = event.target;
        onNumberSelect(value);

        setSelected(prevSelected => !prevSelected)
    }

    return (
        <div className="numbers-container">
            <button disabled={!canSelect} value={i} style={{ backgroundColor }} onClick={onNumberClick} className="btn-number" >{i}</button>
        </div>
    )

}

export { NumberItem }