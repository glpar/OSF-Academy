import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import './Card.css'

class Card extends Component{

    render(){
        return(
            <div class="card" >
                <img class="card-img-top" src="./pikaf.png" id="pikachu"/>
                <div class="card-body">
                    <h5 class="card-title">Pikachu</h5>
                    <p class="card-text">Type:</p>
                    <a class="btn btn-warning">Eletric</a>
                </div>
          </div>
        )
    }

}

export default Card;