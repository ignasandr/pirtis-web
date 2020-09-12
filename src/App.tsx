import React from 'react';
import './App.css';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Tracks from './components/Tracks';

function App() {
  return (
    <div className="App">
      <Tracks />
      <About />
      <Sponsors />
    </div>
  );
}

export default App;