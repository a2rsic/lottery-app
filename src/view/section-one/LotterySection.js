import React, { Component } from 'react';

import { NumberItem } from './NumberItem';
import './LotterySection.css';

const numbersArray = Array(30).fill("").map((e, index) => index + 1);

class LotterySection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTicket: [],
            canSelectNumber: true,
        }
    }

    onClickSelectNumber = (selectedNumber) => {
        let ticketNumbers = this.state.currentTicket;

        if (ticketNumbers.includes(selectedNumber)) {
            ticketNumbers = ticketNumbers.filter((num) => num !== selectedNumber)
        } else {
            ticketNumbers = [
                ...ticketNumbers,
                selectedNumber
            ]
        }

        this.setState({
            currentTicket: ticketNumbers,
        }, () => {
            this.setState({
                canSelectNumber: this.state.currentTicket.length < 5
            });
        });
    }

    renderNumbers() {
        return numbersArray.map((number, i) => {
            return <NumberItem
                key={i} number={number}
                canSelect={this.state.canSelectNumber}
                onNumberSelect={this.onClickSelectNumber} />
        })
    }

    onClickAddTicket = () => {
        const selectedNumbers = this.state.currentTicket;
        this.props.onAddTicket(selectedNumbers);
        this.setState({
            currentTicket: [],
        })
    }

    onClickGetWinningNumbers = () => {
        this.props.onPlayLottery()
    }



    render() {

        const showAddTicketButton = this.props.ticketsCount < 5;
        const showPlayButton = !showAddTicketButton;


        return (
            <>
                <div>
                    <div className="container">
                        {this.renderNumbers()}
                    </div>
                    <div className="btn-container">
                        {showAddTicketButton && <input
                            disabled={this.state.currentTicket.length === 0}
                            type="button"
                            onClick={this.onClickAddTicket}
                            value="Dodaj tiket" />}
                        {showPlayButton && <input type="button"
                            onClick={this.onClickGetWinningNumbers}
                            value="Odigraj" />}
                    </div>
                </div>
            </>
        )
    }
}

export { LotterySection }