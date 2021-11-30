import React, {useRef,useState} from "react";
import "./Modal.css";

export default function Modal({ setPokemons, setOpenModal }) {
  
  const [pokemonName, setPokemonName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // const [miniViewImage, setMiniViewImage] = useState('');
    
    const inputFileRef = useRef(null);
    // const inputNameRef = useRef(null);

    const handleImageChoose = () => {
      inputFileRef.current?.click();
    };
    // const handleNameChoose = () => {
    //     inputNameRef.current?.click();
    //   };

    // const handleImageChange = () => {
    //       const image = inputFileRef.current.files[0];
    //       setMiniViewImage(image);
    // };
    const handleCreatePokemon = () => {
      const test=URL.createObjectURL(selectedImage)
      setPokemons((prevState) =>[...prevState,{id:pokemonName, name:pokemonName,image:test}])
};
  const alphaOnly=(e)=>{
    const key=e.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          Adicionar Pokemon
        </div>
        
        <div className= "inputNameBody">
          <input 
            className="inputName" 
            type="text" 
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)} 
            placeholder="Adicionar nome" 
            onKeyPress={(e)=>alphaOnly(e)}
            required
          />
        </div>
          <div className="filesbtnDiv">
            <button className="filesbtn" onClick={handleImageChoose}>Adicionar Imagem</button>
          </div>
          <div className="body">
            {selectedImage && (
              <div>
              <div className="divMiniView" >
              <img alt="Imagem não encontrada" width={"250px"} src={URL.createObjectURL(selectedImage)} />
              </div>
              <br />
              {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
              </div>
            )}
            {/* <br />
          
            <br />  */}
            <input
              type="file"
              ref={inputFileRef}
              className="inputImage"
              accept=""
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
              hidden={true}
              required
            />
            
          </div>
            {/* <button onClick={handleNameChoose} className="namebtn">Add</button>
            </div>

        <input className="inputImage" value={pokemonName} type="file" onChange={handleImageChange} hidden={true} required/>
            <button onClick={handleImageChoose} >
              Adicionar Imagem
            </button>
        </div>
        <div className="divMiniView" id="miniView">
              {miniViewImage ? (<img className="miniViewImage" src={URL.createObjectURL(miniViewImage)}/>) : ("Nenhuma Imagem Adicionada")}
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> 
          <button onClick={handleCreatePokemon}>Adicionar</button>
        </div>
      </div>
      </div>
  );
}