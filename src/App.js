import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Compressor from './containers/Compressor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row App">
        <div className="col-lg-3">
          <SideBar />
        </div>
        <div className="col-lg-9">
          <Compressor />
        </div>

      </div>
    );
  }
}

export default App;
