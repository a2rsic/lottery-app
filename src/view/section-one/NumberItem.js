import React, { Component } from 'react';

import './NumberItem.css'

class NumberItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }

    onNumberClick = (event) => {
        const { value } = event.target;
        this.props.onNumberSelect(value);

        // setSelected(prevSelected => !prevSelected)
        // this.setState((prevState) =>
        //     ({ isSelected: !prevState.isSelected })
        // )
        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    render() {
        const { isSelected } = this.state;
        let backgroundColor = 'green';
        if (this.props.ticketCounter.length !== 0 && isSelected) {
            backgroundColor = 'red';
        } else {
            backgroundColor = 'green'
        }


        return (
            <div className="numbers-container">
                <button
                    disabled={!this.props.canSelect}
                    value={this.props.number}
                    style={{ backgroundColor }}
                    onClick={this.onNumberClick}
                    className="btn-number" >{this.props.number}</button>
            </div>
        )
    }

}

export { NumberItem }