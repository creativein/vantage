import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
// importing the navigation
import NavigationBar from "./components/Navigation/NavigationBar";
import MobileNav from "./components/Navigation/MobileNav";
// immporting the client component
import ClientLogin from './components/ClientLogin';
// importing compressor
import Compressor from './components/Compressor';
class App extends Component {
  state = {
		clientName: "MFD",
		mobileNav: false
	}

  resize() {
		// Check on resize pade width
		let currentMobileNav = (window.innerWidth < 992);
		// console.log("mobileNav:", currentMobileNav)
		if (currentMobileNav !== this.state.mobileNav) {
			this.setState({ mobileNav: currentMobileNav });
		}
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  
  render() {
    return (
      <div className="App">
      	<div className="container-fluid">

        { this.state.mobileNav && (
          <MobileNav />
        )}

        <div className="row">
          { !this.state.mobileNav && (
            <div className="col-lg-3 scrollingNavigation">
              <NavigationBar />
            </div>
          )}
          <div className="col-lg-3 dummyDiv">
            { /* Dummy Div */ }
          </div>
          <div className="col-lg-9 mainContent">
            <ClientLogin clientName={ this.state.clientName } />
            <Switch>
            <Route exact path="/compressor" render={ () => (
                <Compressor />
            )} />
            <Route render={ () => (
              <Compressor />
            )} />
          </Switch>    
          </div>    
        </div>
        </div>
      </div>
    );
  }
}

export default App;
