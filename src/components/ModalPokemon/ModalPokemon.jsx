import React, { useState } from 'react';
import '../ModalPokemon/ModalPokemon.css'
import Modal from '../Modal/Modal';

export default function ModalPokemon({setPokemons}) {

    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="ModelPokemon">
      <header className="Model-header">
        <button className="openModal" onClick={() => {setModalOpen(true);}}>Adicionar Pokemon</button>
        {modalOpen && <Modal setPokemons={setPokemons} setOpenModal={setModalOpen} />}
      </header>
    </div>
  );
}
