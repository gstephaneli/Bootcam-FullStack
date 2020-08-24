import React, { Component, Fragment } from 'react';
import Counter from './components/counter/Counter';
import Counter2 from './components/counter/Counter2';


export default class App extends Component {

  constructor(){
    super()

    this.state = {
      currentCounter: 3,
      steps: 1,
    }
  }

  handleClick = (clickType) => {
      const {currentCounter, steps}  = this.state

      this.setState( {
          currentCounter: clickType === '+' ? currentCounter +1 : currentCounter -1,
          steps: steps+1
      } )
  
  }
  render() {
    const {currentCounter, steps} = this.state
    return (
      <Fragment>
        <h1>Text</h1>
        <Counter />
        <Counter />
        <Counter />
        <h3>New Counter</h3>
        <Counter2 onAction={this.handleClick} currentValue={currentCounter} currentSteps={steps} />
        <Counter2 onAction={this.handleClick} currentValue={currentCounter} currentSteps={steps} />
        <Counter2 onAction={this.handleClick} currentValue={currentCounter} currentSteps={steps} />

      </Fragment>

    );
  }
}
