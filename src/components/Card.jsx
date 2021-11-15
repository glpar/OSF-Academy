import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import './Card.css'
let i=0;
class Card extends Component{
    // handleClick() {
    //     if(i == 0){
    //         document.getElementById("pikachu").src="./pikab.png";
    //         i++;
    //     }
    //     else if (i == 1){
    //         document.getElementById("pikachu").src="./pikaf.png";
    //         i=0;
    //     }
    // }
    render(){
        return(
            <div className="card" >
                 <img className="card-img-top" src="./pikaf.png" id="pikachu"/> 
                <div className="card-body">
                    <h5 className="card-title">Pikachu</h5>
                    <p className="card-text">Type:</p>
                    <a className="btn btn-warning">Eletric</a>
                    <img className="pb" src="./poke1.png" id="pokeball"/>
                </div>
          </div>
        )
    }

}

export default Card;