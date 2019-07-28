import React from 'react';

import './CurrentTicket.css';

const CurrentTicket = (props) => {
    const { selectedNumbers } = props;
    return (
        <div className="current-ticket">
            <span>{selectedNumbers}</span>
        </div>
    )
}

export { CurrentTicket }