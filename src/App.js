import logo from './logo.svg';
import './App.css';
import ViewSelect from './ViewSelect.js';
import { useState } from 'react';


function App() {
  const [viewState, setViewState] = useState("individual");

  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>     
      </header>
    <body>
      <button onClick={() => setViewState("gallery")}>Gallery</button> <button onClick={() => setViewState("individual")}>Individual</button> <button onClick={() => setViewState("list")}>list</button>
        <ViewSelect view={viewState} />
        

    </body>

    
  </div> 
  );
}

export default App;
