import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

class Header extends Component{

    render(){
        return(
        <nav className="navbar">
            <div className="cont col-md-auto">
                <img className="image2" src="./poke2.png"/>
                <h1 className="text">
                    PokeDesk
                </h1>
            </div>
            <div>
                <form className="d-flex col-md-auto">
                    <input className="form-control me-2" type="search" placeholder="Procurar Pokémon" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="search">Buscar</button>
                </form>
            </div>
        </nav>
        )
    }

}

export default Header;