import React, { Component } from 'react'

export default class DecrementButton extends Component {
    handleButtomClick = ()=>{
        this.props.onDecrement('-')
    }
    render() {
        return (
            <button onClick={this.handleButtomClick} className="waves-effect waves-light btn red darken-4 ">
                - 
            </button>
        )
    }
}
