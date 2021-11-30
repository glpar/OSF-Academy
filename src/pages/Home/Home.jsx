import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import Grid from '../../components/Grid/Grid'
import Header from '../../components/Header/Header'
import ModalPokemon from '../../components/ModalPokemon/ModalPokemon'

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
    return (
      <div className= "menu col-md-auto">
        <Header/>
        <ModalPokemon className="col-md-auto" setPokemons={setPokemons}/>
        <Grid setPokemons={setPokemons} pokemons={pokemons}/>
      </div>
    );
}
