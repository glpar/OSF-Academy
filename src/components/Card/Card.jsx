import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'
import Pikaf from '../../assets/images/pikaf.png'
let i=0;

const Card =({setPokemons,id,name,image})=>{
        const handleRemovePokemon= () => {
            console.log("aqui")
            setPokemons((prevState) => {
                return prevState.filter(pokemon => id!==pokemon.id)
            })
        }
        return(
            <div key={id} className="card" >
                 {/* <img className="card-img-top" src={Pikaf} id="pikachu"/> 
                <div className="card-body">
                    <h5 className="card-title">Pikachu</h5>
                    <p className="card-text">Type:</p>
                    <a className="btn btn-warning">Eletric</a> */}
                     <button onClick={handleRemovePokemon} >Delete</button>
                    <h5 className="card-title">
                        {name}
                    </h5>
                    <img className="card-img-top" src={image}/>
                    

                    <img className="pb" src="./poke1.png" id="pokeball"/>
                </div>
        //   </div>
        )
}
export default Card;