import React from "react";
import "./Pokedex.css";
import UseDebounce from "../Debouncing/UseDebounce";

 function Pokedex({update}) {
   
     const debounce=UseDebounce((e)=>{
        update(e.target.value);
       });
  return (
    <div className="Pokedex-wrapper">
    <h1>POKEDEX</h1>

    <input type="search"
    onChange={debounce}
     placeholder="Pokedex Search..." className="input">
     
    </input>
       
    </div>
  )
}
export default Pokedex;
