import React from 'react';
import './App.css';
import Armymenone from './armymenone';
import Armymentwo from './armymentwo';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Armymenone camp="Madras Camp"/>
        <Armymentwo camp="Singh Camp" />
      </div>
      <div className="button-control">
        <a className="button" href="">End Shooting</a>
      </div>
      
    </React.Fragment>
    
  );
}

export default App;
