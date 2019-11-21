import React from 'react';
import './App.css';
import Armymenone from './armymenone';
import Armymentwo from './armymentwo';

function App() {
  return (
    <div className="App">
      <Armymenone camp="Madras Camp"/>
      <Armymentwo camp="Singh Camp" />
    </div>
  );
}

export default App;
