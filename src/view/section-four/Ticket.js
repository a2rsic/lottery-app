import React from 'react';

import './Ticket.css';

const Ticket = ({ ticketNumbers = [] }) => {
    return (
        <div className="current-ticket">
            {ticketNumbers.map((num, i) => {
                return <div className="selected-number" key={i}>{num}</div>
            })}
            <div className="ticket-result">
                {this.props.ticketResult}
            </div>
        </div>
    )
}

export { Ticket }