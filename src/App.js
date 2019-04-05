import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Compressor from './containers/Compressor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <SideBar />
        <Compressor/>
      </div>
    );
  }
}

export default App;
