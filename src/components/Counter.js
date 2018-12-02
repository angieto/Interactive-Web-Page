import React, { Component } from 'react';

export class Counter extends Component {

    render() {

        return (
            <div className="counter">
                <button className="counter-action decremenet" onClick = { () => this.props.changeScore(-1) }> - </button>
                <span className="counter-score"> { this.props.score } </span>
                <button className="counter-action incremenet" onClick = { () => this.props.changeScore(+1) }> + </button>
            </div>
        );
    }
}