import React, { Component } from 'react';

import './TicketsList.css';
import { Ticket } from './Ticket';

class TicketsList extends Component {



    render() {

        const text = this.props.tickets.length === 0 ? <p>Nema dodatih tiketa <br /> Tiket može da sadrži minimun jedan, a maksimun pet izabranih brojeva</p> : '';

        return (
            <>
                <div className="tickets-container">
                    <div className="no-tickets">
                        {text}
                    </div>
                    {this.props.tickets.map((ticketNumbers, i) => {
                        return <Ticket
                            key={i}
                            ticketNumbers={ticketNumbers}
                            lotteryNumbers={this.props.lotteryNumbers}
                        />
                    })}
                </div>
            </>
        )
    }
}

export { TicketsList }