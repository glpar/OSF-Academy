import React, {Component} from "react";
import Card from "../Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Grid/Grid.css'

function Grid({setPokemons, pokemons}){
        return(
            <div className="container col-md-auto">
                  {pokemons.map(pokemon => {
                          return <Card setPokemons={setPokemons} id={pokemon.id} name={pokemon.name} image={pokemon.image}/>
                  })}
                </div>
        )
}
export default Grid;