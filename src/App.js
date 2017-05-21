import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { test } from './actions/commonAction';

class App extends Component {
  render() {
    console.log(this);
    const title = this.props.appReducerInfo;
    const date = this.props.appReducerTitle.date;
    const temp = this.props.appReducerTitle.temp;
    const weatherText = this.props.appReducerTitle.text;
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
        <div>
          <h1>Weather in: {title}</h1>
          <p>Date: {date}</p>
          <p>Temperature: {temp}</p>
          <p>Weather State: {weatherText}</p>
        </div>
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
