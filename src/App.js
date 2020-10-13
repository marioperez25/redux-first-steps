import React from 'react';
import logo from './logo.svg';
import { ComponentTest } from './features/firstSlice/ComponentTest'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentTest />
      </header>
    </div>
  );
}

export default App;
