import React, { Component, Fragment } from 'react';
import Counter from './components/counter/Counter';


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Text</h1>
        <Counter />
        <Counter />
        <Counter />
      </Fragment>

    );
  }
}
