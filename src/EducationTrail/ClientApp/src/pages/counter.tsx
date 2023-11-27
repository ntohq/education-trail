import React, { Component, MouseEvent } from 'react';
import HomeLayout from "@layouts/HomeLayout";
import { FetchData } from '@components/FetchData';

export interface CounterState {
  currentCount: number;
}

export class Counter extends Component<{}, CounterState> {
  static displayName = Counter.name;

  constructor(props: {}) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentDidMount() {
    document.title =  "Counter - Education Trail";
  }

  incrementCounter() {
    this.setState((prevState) => ({
      currentCount: prevState.currentCount + 1
    }));
  }

  render() {
    return (
      <HomeLayout>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-outline btn-primary" onClick={this.incrementCounter}>
          Increment
        </button>
        <FetchData></FetchData>
      </HomeLayout>
    );
  }
}


export default Counter;