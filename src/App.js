import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MaterialUI from './components/MaterialUI';
import DisplayProduct from './components/DisplayProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <MaterialUI />} />
        <Route exact path="/product" element={ <DisplayProduct />} />
      </Routes>
    </div>
  );
}

export default App;
