import React, { Component } from 'react';

import './NumberItem.css'

class NumberItem extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.isSelected !== nextProps.isSelected
    }

    onNumberClick = (event) => {
        const { value } = event.target;
        this.props.onNumberSelect(Number.parseInt(value));
    }

    render() {
        const { number, isSelected } = this.props

        let backgroundColor = 'yellowgreen';

        if (isSelected) {
            backgroundColor = 'tomato';
        }

        return (
            <div className="numbers-container">
                <button
                    value={number}
                    style={{ backgroundColor }}
                    onClick={this.onNumberClick}
                    className="btn-number" >{number}</button>
            </div>
        )
    }

}

export { NumberItem }
