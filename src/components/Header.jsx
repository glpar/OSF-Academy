import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import './Header.css'

class Header extends Component{

    render(){
        return(
        <nav class="navbar">
            <div class="cont">
                <img src="./poke2.png" alt="" class="image2"/>
                <text class="text">
                    PokeDesk
                </text>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Procurar Pokémon" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        )
    }

}

export default Header;