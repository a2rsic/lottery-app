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
        <div className="current-ticket" style={{ backgroundColor }}>
            {ticketNumbers.map((num, i) => {
                const isIncluded = lotteryNumbers.includes(num)
                const winingNumberStyle =
                    isIncluded && shouldValidate
                        ? { backgroundColor: 'royalblue', border: '3px solid' }
                        : {}
                return (
                    <div className="selected-number" style={winingNumberStyle} key={i}>
                        {num}
                    </div>
                )
            })}
        </div>
    )
}

export { Ticket }
