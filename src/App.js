import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayProduct from './components/DisplayProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <DisplayProduct />} />
      </Routes>
    </div>
  );
}

export default App;
