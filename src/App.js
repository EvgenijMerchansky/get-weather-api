import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { test } from './actions/commonAction';

class App extends Component {
  render() {
    console.log(this);
    const title = this.props.appReducer.info.title;
    const pubDate = this.props.appReducer.info.pubDate;
    const lat = this.props.appReducer.info.lat;
    const long = this.props.appReducer.info.long;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input ref={(input) => {this.inputValue = input}}></input>
        <button onClick={() => {this.props.test(this.inputValue.value)}}>test!</button>

        <br/>
        <br/>

        <div>
          <h1>{title}</h1>
          <p>{pubDate}</p>
          <p>{lat}</p>
          <p>{long}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appReducer: state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    test
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
