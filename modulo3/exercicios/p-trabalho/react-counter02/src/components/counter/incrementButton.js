import React, { Component } from 'react'

export default class IncrementButton extends Component {
    handleButtomClick = ()=>{
        this.props.onIncrement('+')
    }
    render() {
        return (
            <button onClick={this.handleButtomClick} className="waves-effect waves-light btn green darken-4 ">
                + 
            </button>
        )
    }
}
