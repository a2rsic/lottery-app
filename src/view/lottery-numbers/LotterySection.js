import React, { Component } from 'react';

import { NumberItem } from './NumberItem';
import './LotterySection.css';

const numbersArray = Array(30).fill("").map((e, index) => index + 1);

class LotterySection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTicket: [],
        }
    }

    onClickSelectNumber = (selectedNumber) => {
        let ticketNumbers = this.state.currentTicket

        if (this.props.ticketsCount === 5) {
            window.alert('Dodat je maksimalan broj tiketa')
            return
        }

        if (!ticketNumbers.includes(selectedNumber) && ticketNumbers.length === 5) {
            window.alert('Dodat je maksimalan broj brojeva u tiketu')
            return
        }

        if (ticketNumbers.includes(selectedNumber)) {
            ticketNumbers = ticketNumbers.filter(num => num !== selectedNumber)
        } else {
            ticketNumbers = [...ticketNumbers, Number.parseInt(selectedNumber)]
        }

        this.setState({
            currentTicket: ticketNumbers
        });
    }

    renderNumbers() {
        return numbersArray.map((number, i) => {
            return <NumberItem
                key={i} number={number}
                onNumberSelect={this.onClickSelectNumber}
                currentTicket={this.state.currentTicket}
                isSelected={this.state.currentTicket.includes(number)}
            />
        })
    }

    onClickAddTicket = () => {
        const selectedNumbers = this.state.currentTicket;
        this.props.onAddTicket(selectedNumbers);
        this.setState({
            currentTicket: []
        })
    }

    onClickGetWinningNumbers = () => {
        this.props.onPlayLottery()
    }


    render() {

        const { gamePlayed, ticketsCount } = this.props;
        const showAddTicketButton = ticketsCount < 5
        const showPlayButton = !showAddTicketButton


        return (
            <div>
                <div className="container">{this.renderNumbers()}</div>
                <div className="btn-container">
                    {showAddTicketButton && (
                        <input
                            type="button"
                            onClick={this.onClickAddTicket}
                            value="DODAJ TIKET"
                        />
                    )}
                    {!gamePlayed && showPlayButton && (
                        <input
                            style={{ backgroundColor: 'goldenrod' }}
                            type="button"
                            onClick={this.onClickGetWinningNumbers}
                            value="ODIGRAJ"
                        />
                    )}
                    {gamePlayed && (
                        <input
                            type="button"
                            onClick={() => {
                                window.location.reload()
                            }}
                            value="Nova igra"
                        />
                    )}
                </div>
            </div>
        )
    }
}

export { LotterySection }
