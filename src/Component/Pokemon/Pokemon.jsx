import React from 'react'
import "./Pokemon.css";
import { Link } from 'react-router-dom';
function Pokemon({name,image,id}) {
   
  return (
    <Link to={`/pokemon/${id+1}`} >
   <div className='pokemon-wrapper'>
         <h1>{name}</h1>
         <img src={image}/>
    </div>
    </Link>

  )
}

export default Pokemon
