import React, { Component } from 'react';

export class Toggle extends Component {

    render() {

        return (
            <>
                <button onClick={this.props.handleClick}>
                    {this.props.isPlay ? "PAUSE" : "PLAY"}
                </button>
            </>
        );

    }
}

