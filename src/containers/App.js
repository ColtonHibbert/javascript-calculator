import React, { Component } from 'react';
import 'tachyons';
import Calculator from '../components/Calculator.js';
import Display from '../components/Display.js';
import Buttons from '../components/Buttons.js';
import { 
  updateCurrentValue,
  combineInputs, 
  calculatedValue, 
  clearCombinedInputs,
  changeFirstValueToNonZeroNumber,
  logInputs,
  logEquals,
 } from '../services/actions.js';
import { connect } from 'react-redux';
import { store } from '../index.js';

const mapStateToProps = (state) => {
  return {
    displayLower: state.calculatedValue,
    currentValue: state.currentValue,
    previousValue: state.previousValue,
    currentOperator: state.currentOperator,
    combinedInputs: state.combinedInputs,
    calculatedValue: state.calculatedValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentValue: (value) => dispatch(updateCurrentValue(value)),
    combineInputs: (value) => dispatch(combineInputs(value)),
    calculatedValue: (value) => dispatch(calculatedValue(value)),
    changeFirstValueToNonZeroNumber: (value) => dispatch(changeFirstValueToNonZeroNumber(value)),
    logEquals: (value) => { dispatch(logEquals(value))},
    allClear: (value) => {
      dispatch(clearCombinedInputs(value));
    },
    logInputs: (value) => { dispatch(logInputs(value));}
    // logInputs: (value) => {
    //  dispatch(updateCurrentValue(value));
    //  dispatch(combineInputs(value));
    // },
    // logPlus: (value) => {
    //   dispatch(updateCurrentValue(value));
    //   dispatch(combineInputs(value));
    //   console.log(store.getState());
    // },
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    //this.props = 1;
    // this.state= {
    //   value: 1,
    // }
  }

  render() {
  return (
    <div className="min-vh-100 bg-light-green flex flex-column items-center pt5">
      <Calculator>
        <Display 
          displayLower={this.props.displayLower}
          combinedInputs={this.props.combinedInputs}
          calculatedValue={this.props.calculatedValue}
        />
        <Buttons 
           updateCurrentValue={this.props.updateCurrentValue}
           logInputs={this.props.logInputs}
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
