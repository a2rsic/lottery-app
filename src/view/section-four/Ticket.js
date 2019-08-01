import React from 'react';

import './Ticket.css';

const Ticket = ({ ticketNumbers = [], lotteryNumbers }) => {

    const shouldValidate = lotteryNumbers.length === 12;

    const ticketResult = ticketNumbers.some((number) => {
        return lotteryNumbers.includes(Number.parseInt(number))
    })


    let backgroundColor = 'white';
    if (shouldValidate) {
        backgroundColor = ticketResult ? 'green' : 'red';
    }
    return (
        <>
            <div className="current-ticket" style={{ backgroundColor }} >
                {ticketNumbers.map((num, i) => {
                    return <div className="selected-number" key={i}>{num}</div>
                })}
            </div>
        </>
    )
}

export { Ticket }