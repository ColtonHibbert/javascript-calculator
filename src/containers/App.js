import React, { Component } from 'react';
import 'tachyons';
import Calculator from '../components/Calculator.js';
import Display from '../components/Display.js';
import Buttons from '../components/Buttons.js';
import { changeDisplayUpper } from '../services/actions.js';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    displayUpper: state.displayUpper,
    displayLower: state.displayLower,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayUpper: () => dispatch(changeDisplayUpper(7)),
  }
}

class App extends Component {
  constructor() {
    super();
    //this.props = 1;
    // this.state= {
    //   value: 1,
    // }
  }
  render() {
  return (
    <div className="min-vh-100 bg-light-green flex flex-column items-center">
      <Calculator>
        <Display 
          changeDisplayUpper={this.props.changeDisplayUpper}
        />
        <Buttons />
      </Calculator>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
