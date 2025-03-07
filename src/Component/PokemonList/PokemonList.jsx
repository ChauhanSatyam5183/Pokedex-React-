import React, { useEffect, useState } from 'react'
import "./PokemonList.css";
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
import "./PokemonList.css";
import PokemonDetail from '../PokemonDetail/PokemonDetail';

function PokemonList({search}) {

    const[List,setList]=useState([]);

    const[url,seturl]=useState("https://pokeapi.co/api/v2/pokemon");
    const[nexturl,setnexturl]=useState();
    const[prevurl,setprevurl]=useState();


     async function downloadlist() {
        
        const response=(await axios.get(url)).data;

        console.log("response",response);

        setnexturl(response.next);
        setprevurl(response.previous);

      //now moving on each results.url using promise like structure
       const data=response.results.map((pokemon)=>axios.get(pokemon.url));

       //now moving on each data and fetch each pokdmeom detail
       const result=await axios.all(data);

       //now going on eack pokemon to fetch their dtail and save them
       console.log("result",result);

       const res=result.map((p)=>{
          const pokemon=p.data;

          return{
            id:pokemon.id,
            name:pokemon.name,
            image:pokemon.sprites.other.dream_world.front_default,

          };  

       });

     setList(res);
     }
   
   
    useEffect(()=>{
          downloadlist();
    },[url]);
  return (
    <>

    {search?
    <PokemonDetail name={search}/> 
    :
      <div className='PokemonList-wrapper'>
          
        {List.map((el,id)=>
         <Pokemon name={el.name} image={el.image} key={id} id={id}/>)};

        <div className='btn-wrapper'>
     <button className='btn' disabled={prevurl==null} onClick={()=>seturl(prevurl)}>Prev</button>
     <button className='btn' disabled={nexturl==null} onClick={()=>seturl(nexturl)}>Next</button>
     </div>
    </div>
    
    }
    </>
    
  )
}

export default PokemonList;
