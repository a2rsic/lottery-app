import React, { Component } from 'react';

import '../App.css';
import { Header } from './common/header/Header';
import { LotterySection } from './section-one/LotterySection';
import { TicketsList } from './section-four/TicketsList';
import { LotteryWinningNumbers } from './section-three/LotteryWinningNumbers';

class App extends Component {
  state = {
    tickets: [],
    canSelecNumber: true,
    allNumbers: this.setRandomNumbersArr(),
    currentNumber: 0,
    randomNumbers: []
  }

  onAddTicket = (currentTicket) => {
    const tickets = this.state.tickets;
    tickets.push(currentTicket)

    this.setState({
      tickets
    })
  }

  setRandomNumbersArr() {
    const createNumberArray = Array(12).fill(-1);

    const randomNumbersArray = createNumberArray.map((e, i, array) => {
      let newNum = Math.floor(Math.random() * (31 - 1)) + 1;

      if (array.includes(newNum)) {
        newNum = Math.floor(Math.random() * (31 - 1)) + 1;
      }
      return newNum
    })
    return randomNumbersArray;
  }

  onGetWinningNumbers = () => {
    let interval = setInterval(() => {

      if (this.state.randomNumbers.length === 12) {
        interval = 0;
        clearInterval(interval);
        return;
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
            onPlayLottery={this.onGetWinningNumbers} />
          <div className="section">
            <div className="tickets-list-container">
              <TicketsList
                canSelect={this.state.canSelecNumber}
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
