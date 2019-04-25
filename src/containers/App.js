import React, { Component } from 'react';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.props = 1;
    // this.state= {
    //   value: 1,
    // }
  }
  render() {
  return (
    <div className="min-vh-100 bg-light-green">
      calc
    </div>
  );
  }
}

export default App;
