import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./PokemonDetail.css";

function PokemonDetail({name}) {
   const{id}=useParams();
   const[Data,setdata]=useState({}); 
   let url;
   if(name){
    url =`https://pokeapi.co/api/v2/pokemon/${name}`;
   }
   
   else{
     url=`https://pokeapi.co/api/v2/pokemon/${id}`;
   }
  console.log(url);
   async function Download() {
     
    const response=await axios.get(url);
    console.log("PokemonDetail_response",response.data);

    setdata({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        height:response.data.height,
        weight:response.data.weight,

    });

   }
   
   useEffect(()=>{
     
    Download();
   },[]);


  return (
    <div className='pokemonDetail-wrapper'>
    <div className='div'>
    <h1 className='h1'>POKEMON DETAIL</h1>
    {name?<div></div>
    :<Link to="/"><button className='btn'>X</button></Link>
    }
    </div> 
    
    <h1>Name:-{Data.name}</h1>
    <img src={Data.image} />
    <h2>Height:-{Data.height}</h2>
    <h2>weight:-{Data.weight}</h2>
       
    </div>
  )
}

export default PokemonDetail;
