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
  updatePreviousValue,
  changeFirstValueToNonZeroNumber,
  logInputs,
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
    logEquals: (value) => {
      dispatch(updateCurrentValue(value));
      dispatch(calculatedValue(value));
    },
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

  // functionCalulateValue() {
  //     const inputs = this.props.combinedInputs.slice();
  //     inputs.join("");
  //     return inputs;
  // }
  // logInputs(value) {
  //   console.log(store.getState());
  //   //  if(this.props.combinedInputs.length === 1 && value !== 0 || value !== "+" || value !== "-" ||  value !== "*" ||  value !== "/") {
  //   //     this.props.updateCurrentValue(value);
  //   //     this.props.changeFirstValueToNonZeroNumber(value);
  //   //   }
  //   //   if(this.props.combinedInputs.length >= 2 ) {
  //   //     this.props.updatePreviousValue();
  //   //   }
  //   //   else {
  //      dispatch(updateCurrentValue(value));
  //      dispatch(this.props.combineInputs(value));
  //   //  }
  // }


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
