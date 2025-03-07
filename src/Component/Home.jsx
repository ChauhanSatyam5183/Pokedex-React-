import React, { useState } from 'react'
import Pokedex from './Pokedex/Pokedex'
import PokemonList from './PokemonList/PokemonList'

function Home() {
  const[search,setsearch]=useState();
  return (
    <>
      <Pokedex update={setsearch}/>
      <PokemonList search={search}/>
    </>
  )
}

export default Home
