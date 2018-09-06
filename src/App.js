import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div className="App">
          <button className='inc' onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
          <button className='dec' onClick={() => this.setState({count: this.state.count - 1})}>Decrease</button>
      </div>
    );
  }
}

export default App;
