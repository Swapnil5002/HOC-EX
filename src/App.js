import React from 'react';
import './App.css';
import Armymenone from './armymenone';
import Armymentwo from './armymentwo';
import Armymenthree from './armymenthree'

function App() {
  return (
      <div className="container">
        <div className="App">
          <Armymenone camp="Alpha Camp"/>
          <Armymentwo camp="Beta Camp" />
          <Armymenthree camp="Delta Camp"/>
        </div>
      </div>    
  );
}
export default App;