import React, {Component} from 'react';
import './App.css';
import AppRoutes from './pages/AppRoutes';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppRoutes/>
            </div>
        );
    }
}

export default App;
