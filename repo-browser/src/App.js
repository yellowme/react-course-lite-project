import React, { Component } from 'react';
import './App.css';

import Repositories from "./pages/Repositories/Repositories";

class App extends Component {
  render() {
    return (
      <div>
        <Repositories />
      </div>
    );
  }
}

export default App;
