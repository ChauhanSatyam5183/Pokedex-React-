import React from 'react';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import PokemonDetail from './Component/PokemonDetail/PokemonDetail';


function App() {
  
  return (
    < >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
    </Routes>

    </> 
  )
}

export default App
