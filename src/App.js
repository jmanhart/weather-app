import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={"methodDoesNotExist"}>Break the world</button>
      </header>
    </div>
  );
}

export default App;
