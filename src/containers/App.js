import React, { Component } from 'react';
import 'tachyons';
import Calculator from '../components/Calculator.js';
import Display from '../components/Display.js';
import Buttons from '../components/Buttons.js';
import { changeDisplayUpper, updateCurrentValue,
 } from '../services/actions.js';
import { connect } from 'react-redux';
import { store } from '../index.js';

const mapStateToProps = (state) => {
  return {
    displayUpper: state.displayUpper,
    displayLower: state.displayLower,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayUpper: () => dispatch(changeDisplayUpper()),
    updateCurrentValue: (value) => dispatch(updateCurrentValue(value)),
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
  functionGetCurrentValue() {
    
  }
  render() {
  return (
    <div className="min-vh-100 bg-light-green flex flex-column items-center">
      <Calculator>
        <Display 
          
        />
        <Buttons 
           changeDisplayUpper={this.props.changeDisplayUpper}
           updateCurrentValue={this.props.updateCurrentValue}
        />
      </Calculator>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
