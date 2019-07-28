import React, { Component } from 'react';

// import { Ticket } from '../section-two/Ticket';
import './TicketsList.css';
import { CurrentTicket } from './CurrentTicket';

class TicketsList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="tickets-container">
                    <CurrentTicket />
                </div>
                {/* // <Ticket /> */}
            </>
        )
    }
}

export { TicketsList }