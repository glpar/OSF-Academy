import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../../assets/images/poke2.png'
import ModalPokemon from '../ModalPokemon/ModalPokemon'


export default function Header(){
        return(
        <nav className="navbar">
            <div className="cont col-md-auto">
                <img className="logo" src={Logo}/>
                <h1 className="text">
                    PokeDesk
                </h1>
            </div>
            <div>
                <form className="d-flex col-md-auto">
                    <input className="form-control me-2" type="search" placeholder="Procurar Pokémon" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="search">Buscar</button>
                    
                </form>
                {/* <ModalPokemon/> */}
            </div>
            
        </nav>
        )

}