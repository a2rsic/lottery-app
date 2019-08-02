import React, { Component } from 'react';

import './LotteryWinningNumbers.css';


class LotteryWinningNumbers extends Component {
    render() {
        const text = this.props.randomNumbers.length === 0 ? <p>Izvlačenje počinje klikom na dugme 'ODIGRAJ' nakon pet dodatih tiketa</p> : ''
        return (
            <div className="winning-numbers-container">
                <div className="play-lottery">{text}</div>
                {this.props.randomNumbers.map((num, i) => {
                    return <div className="random-numbers" key={i}>{num}</div>
                })}
            </div>
        )

    }
}

export { LotteryWinningNumbers }
