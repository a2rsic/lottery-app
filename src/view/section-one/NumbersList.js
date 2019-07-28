import React, { Component } from 'react';
import { NumberItem } from './NumberItem';

import './NumbersList.css';
// import { TicketsList } from '../section-four/TicketsList';
import { CurrentTicket } from '../section-four/CurrentTicket';
// import { Ticket } from '../section-two/Ticket';

const numbersArray = Array(30).fill("").map((e, index) => index + 1)


class NumbersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTicket: [],
            canSelectNumber: true,
        }
    }

    onClickSelectNumber = (selectedNumber) => {
        this.setState({
            currentTicket: [
                ...this.state.currentTicket,
                selectedNumber
            ]
        }, () => {
            this.setState({
                canSelectNumber: this.state.currentTicket.length < 5
            });
        });
        console.log("current ticket", this.state.currentTicket);
    }

    renderNumbers() {
        return numbersArray.map((number, i) => {
            return <NumberItem key={i} number={number} canSelect={this.state.canSelectNumber} onNumberSelect={this.onClickSelectNumber} />
        })
    }

    render() {
        return (
            <>,
            <div className="container">
                    {this.renderNumbers()}
                </div>
                <div className="tickets-container">
                    <CurrentTicket selectedNumbers={this.state.currentTicket} />
                </div>
                {/* <TicketsList tickets={this.state.currentTicket} /> */}
                {/* <Ticket /> */}
            </>
        )
    }
}

export { NumbersList }