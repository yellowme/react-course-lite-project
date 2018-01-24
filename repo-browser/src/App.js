import React, { Component } from 'react';
import './App.css';

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

class App extends Component {
  render() {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
}

export default App;
