import React, { Component } from 'react';
import 'tachyons';
import Calculator from '../components/Calculator.js';
import Display from '../components/Display.js';
import Buttons from '../components/Buttons.js';
import { changeDisplayUpper, updateCurrentValue,
         combineInputs, calculatedValue
 } from '../services/actions.js';
import { connect } from 'react-redux';
import { store } from '../index.js';
//
const mapStateToProps = (state) => {
  return {
    displayUpper: state.displayUpper,
    displayLower: state.calculatedValue,
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
    calculatedValue: (value) => dispatch(calculatedValue(value)),
    logInput: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(combineInputs(value));
      console.log(store.getState());
    },
    logPlus: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(combineInputs(value));
      console.log(store.getState());
    },
    logEquals: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(calculatedValue(value));
    },
    allClear: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(calculatedValue(value));
      dispatch(combineInputs(value));
    }
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
  functionGetCurrentValue() {
    
  }
  checkZeros() {
    
  }
  functionCalulateValue() {
      const inputs = this.props.combinedInputs.slice();
      inputs.join("");
      return inputs;
  }
  render() {
  return (
    <div className="min-vh-100 bg-light-green flex flex-column items-center">
      <Calculator>
        <Display 
          displayLower={this.props.displayLower}
          combinedInputs={this.props.combinedInputs}
          calculatedValue={this.props.calculatedValue}
        />
        <Buttons 
           changeDisplayUpper={this.props.changeDisplayUpper}
           updateCurrentValue={this.props.updateCurrentValue}
           logInput={this.props.logInput}
           logPlus={this.props.logPlus}
           logEquals={this.props.logEquals}
           allClear={this.props.allClear}
        />
      </Calculator>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
