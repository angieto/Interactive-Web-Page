import React, { Component } from 'react';

export class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchableText: "",
            offsets: [],
            displayMsg: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.updateSearchableText = this.updateSearchableText.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculateOffsets = this.calculateOffsets.bind(this);
    }

    updateSearchTerm(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    updateSearchableText(event) {
        this.setState({
            searchableText: event.target.value
        });
    }

    handleClick() {
        if(!this.props.isPlay) {return;}
        if (!this.state.searchTerm && !this.state.searchableText) {
            this.setState({
                displayMsg: "All fields are empty"
            });
        }
        else if (!this.state.searchTerm) {
            this.setState({
                displayMsg: "The search term field is empty"
            });
        } else if (!this.state.searchableText) {
            this.setState({
                displayMsg: "The searchable text field is empty"
            });
        } else {
            this.setState({
                offsets: this.calculateOffsets(this.state.searchTerm)
            });
            if (!this.state.offsets.length) {
                this.setState({
                    displayMsg: "No matching result!"
                }); 
            } else {
                this.setState({
                    displayMsg: `Offsets: ${this.state.offsets.join(", ")}`
                });
            }
        }
    }

    calculateOffsets(term) {
        const text = this.state.searchableText;
        let offsets = [];
        
        let offset = 0;
        while (text !== "" && term !== "") {
            offset = text.indexOf(term, offset);
            if (offset === -1) {
                break;
            }
            offsets.push(offset);
            offset = offset + 1;
        }
        
        console.log("offsets: ", offsets);
        return offsets;
    }
    
    render() {
        const check = this.state.searchableText.includes(this.state.searchTerm);
        // const offsets = check ? this.calculateOffsets(this.state.searchTerm) : "";
        return (
            <>
                <p>{this.state.displayMsg}</p>
                <input className="input"
                       type="text" 
                       placeholder="Search..."
                       onChange={this.updateSearchTerm} />

                <button type="submit" onClick={this.handleClick}>
                    Search
                </button>
                <br></br>
                <input className="text"
                       type="text"
                       placeholder="Text to be searched..." 
                       onChange={this.updateSearchableText} />
                <br></br>
            </>
            
        )
    }

}
