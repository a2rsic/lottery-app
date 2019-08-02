import React, { Component } from 'react';

import '../App.css';
import { Header } from './common/header/Header';
import { LotterySection } from './lottery-numbers/LotterySection';
import { TicketsList } from './tickets-list/TicketsList';
import { LotteryWinningNumbers } from './winning-numbers/LotteryWinningNumbers';

class App extends Component {
  intervalID = 0;

  state = {
    tickets: [],
    allNumbers: this.generateLotteryNumbers(),
    currentNumber: 0,
    randomNumbers: []
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  onAddTicket = (currentTicket) => {
    if (!currentTicket.length) {
      window.alert('Mora biti selektovan najmanje jedan broj')
      return;
    }
    const tickets = this.state.tickets;
    tickets.push(currentTicket)

    this.setState({
      tickets
    })
  }

  generateLotteryNumbers() {
    let numbersArray = [];
    while (numbersArray.length < 12) {
      let randomNumber = Math.round(Math.random() * (31 - 1)) + 1
      numbersArray.push(randomNumber)
      numbersArray = Array.from(new Set(numbersArray))
    }
    return numbersArray;
  }

  onGetWinningNumbers = () => {
    this.intervalID = setInterval(() => {
      if (this.state.randomNumbers.length === 12) {
        clearInterval(this.intervalID)
        setTimeout(() => {
          const { randomNumbers } = this.state
          this.setState({ randomNumbers: randomNumbers.sort((a, b) => a - b) })
        }, 1500)
        return
      }

      this.setState((prevState) => ({
        randomNumbers: [
          ...prevState.randomNumbers,
          this.state.allNumbers[this.state.currentNumber]
        ],
        currentNumber: prevState.currentNumber + 1,

      }))

    }, 2000)
  }

  render() {

    return (
      <>
        <Header />
        <main>
          <LotterySection
            ticketsCount={this.state.tickets.length}
            onAddTicket={this.onAddTicket}
            onPlayLottery={this.onGetWinningNumbers}
            gamePlayed={this.state.randomNumbers.length === 12} />
          <div className="section">
            <div className="tickets-list-container">
              <TicketsList
                tickets={this.state.tickets}
                lotteryNumbers={this.state.randomNumbers} />
            </div>
            <div className="winning-numbers">
              <LotteryWinningNumbers
                randomNumbers={this.state.randomNumbers} />
            </div>
          </div>

        </main>
      </>
    );
  }
}

export default App;
