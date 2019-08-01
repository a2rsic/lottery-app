import React, { Component } from 'react';

import './TicketsList.css';
import { Ticket } from './Ticket';

class TicketsList extends Component {

    checkWinningTicket(lotteryNumbers, ticketNumbers) {
        let ticketResult = '';

        lotteryNumbers.forEach(lotteryNumber => ticketNumbers.forEach(ticketNumber => {
            if (lotteryNumber === ticketNumber) {
                return ticketResult = 'DOBITAN'
            } else {
                return ticketResult = 'GUBITAN'
            }
        }))
        return ticketResult;
    }

    render() {
        return (
            <>
                <div className="tickets-container">
                    {this.props.tickets.map((ticketNumbers, i) => {
                        return <Ticket key={i} ticketNumbers={ticketNumbers} ticketResult={this.checkWinningTicket(this.props.lotteryNumbers, this.props.tickets)} />
                    })}
                </div>
            </>
        )
    }
}

export { TicketsList }