import React, { Component } from "react";

import "./App.css";
import FluidLevel from "react-fluid-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fluid Level Demo</h2>
          <FluidLevel id="fillguage" height={200} width={200} value={0.6} />
        </div>
      </div>
    );
  }
}

export default App;
