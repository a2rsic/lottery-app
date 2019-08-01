import React, { Component } from 'react';

import './LotteryWinningNumbers.css';


class LotteryWinningNumbers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div className="winning-numbers-container">
                {this.props.randomNumbers.map((num, i) => {
                    return <div className="random-numbers" key={i}>{num}</div>
                })}
            </div>
        )

    }
}

export { LotteryWinningNumbers }