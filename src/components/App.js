import React, { Component } from 'react';
import { Counter } from './Counter';
import { Toggle } from './Toggle';
import { SearchBox } from './SearchBox';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fooScore: 0,
            barScore: 0,
            maxFooScore: null,
            isPlay: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeFooScore = this.changeFooScore.bind(this);
        this.changeBarScore = this.changeBarScore.bind(this);
    }

    handleChange(event) {
        this.setState({
            maxFooScore: event.target.value
        });
    }

    handleClick() {
        this.setState({
            isPlay: !this.state.isPlay
        });
        console.log(this.state.isPlay);
    }

    changeFooScore = (num) => {
        if (!this.state.isPlay) {return;}
        if (!this.state.maxFooScore || this.state.fooScore < this.state.maxFooScore) {
            this.setState({
                fooScore: this.state.fooScore + num
            });
        } else {
            this.changeBarScore(num);
        }
    }

    changeBarScore = (num) => {
        if (!this.state.isPlay) {return;}
        this.setState({
            barScore: this.state.barScore + num
        })
    }

    render() {

        return (
            <>
                <SearchBox 
                    isPlay={this.state.isPlay}
                />
                <br></br>
                
                <input type="number" placeholder="Max value..."
                       onChange = {this.handleChange}/>
                <Counter 
                    score={this.state.fooScore}
                    changeScore={this.changeFooScore} 
                />
                <br></br>
                <Counter 
                    score={this.state.barScore}
                    changeScore={this.changeBarScore} 
                />
                <br></br>

                <Toggle
                    handleClick={this.handleClick}
                    isPlay={this.state.isPlay} /> 
            </>
        );
    }
}

export default App;
