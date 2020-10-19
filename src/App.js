import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timestamps from './components/timestamps';
import Metrics from './components/metrics';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container-fluid">
        <div className="row">
          <Timestamps />
          <Metrics  />
        </div>
      </div>
     
    </div>
  )  
}

export default App;
