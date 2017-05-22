import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { test } from './actions/commonAction';
import Common from './containers/common.jsx';

class App extends Component {
  render() {
    // console.log(this);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <h4>Type the city: </h4>
        <input ref={(input) => {this.inputValue = input}}></input>
        <button onClick={() => {this.props.test(this.inputValue.value)}}>test!</button>
        <br/>
        <br/>
        <Common/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appReducerTitle: state.infoTitle,
    appReducerInfo: state.generalTitle
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    test
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
