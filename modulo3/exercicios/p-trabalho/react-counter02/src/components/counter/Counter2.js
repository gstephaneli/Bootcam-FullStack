import React, { Component } from 'react'
import css from './counter.module.css'
import IncrementButton from './incrementButton'
import DecrementButton from './decrementButton'
import Value from './value'

export default class Counter2 extends Component {
    
    handleButtomClick = (clickType)=>{
        this.props.onAction(clickType)
    }

    render() {

        const {currentValue, currentSteps}  = this.props
        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={this.handleButtomClick}/>
                <Value value={currentValue}/>
                <IncrementButton onIncrement={this.handleButtomClick}/>
                <Value value={currentSteps}/>


            </div>
        )
    }
}
