import React, { Component } from 'react';
import 'tachyons';
import Calculator from '../components/Calculator.js';
import Display from '../components/Display.js';
import Buttons from '../components/Buttons.js';
import { changeDisplayUpper, updateCurrentValue,
         combineInputs, logInput7
 } from '../services/actions.js';
import { connect } from 'react-redux';
import { store } from '../index.js';

const mapStateToProps = (state) => {
  return {
    displayUpper: state.displayUpper,
    displayLower: state.displayLower,
    currentValue: state.currentValue,
    previousValue: state.previousValue,
    currentOperand: state.currentOperand,
    combinedInputs: state.combinedInputs,
    calculatedValue: state.calculatedValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayUpper: () => dispatch(changeDisplayUpper()),
    updateCurrentValue: (value) => dispatch(updateCurrentValue(value)),
    combineInputs: (value) => dispatch(combineInputs(value)),
    logInput7: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(combineInputs(value));
    },
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
  // logInput7(value, dispatch ) {
  //   this.updateCurrentValue(value);
  //   this.combineInputs(value);
  //   console.log(store.getState())
  //   console.log('hello')
  // }
  logInput8() {
    this.props.updateCurrentValue(8);
  }
  functionGetCurrentValue() {
    
  }
  functionCalulateValue() {
     return this.props.combinedInputs;
  }
  render() {
  return (
    <div className="min-vh-100 bg-light-green flex flex-column items-center">
      <Calculator>
        <Display 
          displayUpper={this.props.displayUpper}
        />
        <Buttons 
           changeDisplayUpper={this.props.changeDisplayUpper}
           updateCurrentValue={this.props.updateCurrentValue}
           logInput7={this.props.logInput7}
        />
      </Calculator>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
