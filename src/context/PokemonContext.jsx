
import React, { useContext, useState } from "react";

const Context = React.createContext([]);

const PokemonContext= ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <Context.Provider value={{ pokemons, setPokemons }}>
      {children}
    </Context.Provider>
  );
};

export default PokemonContext;

export const usePokemonContext = () => {
  return useContext(Context);
};