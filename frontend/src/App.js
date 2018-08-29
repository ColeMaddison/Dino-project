import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount(){
    this.callExpress()
      .then(res => this.setState({response: res.message}))
      .catch(err => console.error(err))
  }

  callExpress = async () => {
    const response = await fetch('/index');
    console.log(response);
    const res = await response.json();
    console.log(res);

    if(response.status !== 200) {
      throw Error(res.message)
    }

    return res;
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
