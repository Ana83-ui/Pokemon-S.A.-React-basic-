import React, { useEffect, useState } from "react";
import { registerPokemon, editPokemon } from "../services/servicesBack";


const CreateComponent = (props) => {
  const { loadPokemon, setMenuOptions, pokemonDetail, setPokemonDetail } = props;

  const [newPokemon, setNewPokemon] = useState({
    id: pokemonDetail ? pokemonDetail.id : '',
    nombre: pokemonDetail ? pokemonDetail.nombre : '',
    url: pokemonDetail ? pokemonDetail.url : '',
    weight: pokemonDetail ? pokemonDetail.weight : '', 
    height: pokemonDetail ? pokemonDetail.height : '',  
    type: pokemonDetail ? pokemonDetail.type : ''
  });

const inputHandler = (nameProp, valueProp) => {
    const pokemonAux = {...newPokemon,
      [nameProp]: valueProp,
    };
    setNewPokemon(pokemonAux);
  };

  const registerPokemonHandler = () => {
    registerPokemon(newPokemon)
    setNewPokemon({
      id: '',
      nombre: '',
      url: '',
      weight: '',
      height: '',
      type: ''
    })
    loadPokemon()     
    setMenuOptions('LISTA')
    alert("¡Pokemon creado!")
  };

  
  const modifyPokemonHandler = () => {
    editPokemon(pokemonDetail, newPokemon)
    setPokemonDetail(newPokemon)
    setNewPokemon({
      id: '',
      nombre: '',
      url: '',
      weight: '',
      height: '',
      type: ''
    })
    loadPokemon()
    setMenuOptions('LISTA')
    alert("¡Pokemon modificado!");
}

useEffect(() => {
    if(!pokemonDetail){
        setNewPokemon({
          id: '',
          nombre: '',
          url: '',
          weight: '',
          height: '',
          type: ''
        })
    }
},[pokemonDetail])

return (
  <div className="register">
    {
      pokemonDetail ? ( 
        <div>
          <h2>Modifica tu pokemon</h2>
          <div>
            <span className="title">Id: </span>
            <input type="text" value={newPokemon.id} name="id" readOnly onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Nombre: </span>
            <input type="text" value={newPokemon.nombre} name="nombre" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">URL: </span>
            <input type="text" value={newPokemon.url} name="url" readOnly onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Weight: </span>
            <input type="text" value={newPokemon.weight} name="weight" readOnly onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Height: </span>
            <input type="text" value={newPokemon.height} name="height" readOnly onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Type: </span>
            <input type="text" value={newPokemon.type} name="type" readOnly onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <button className="create" onClick={() => { modifyPokemonHandler(); }}>Modificar</button>
        </div>
      ) : ( 
        <div>
          <h2>Registra tu pokemon</h2>
          <div>
            <span className="title">Id: </span>
            <input type="text" value={newPokemon.id} name="id" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Nombre: </span>
            <input type="text" value={newPokemon.nombre} name="nombre" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">URL: </span>
            <input type="text" value={newPokemon.url} name="url" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Weight: </span>
            <input type="text" value={newPokemon.weight} name="weight" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Height: </span>
            <input type="text" value={newPokemon.height} name="height" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <div>
            <span className="title">Type: </span>
            <input type="text" value={newPokemon.type} name="type" onChange={(p) => { inputHandler(p.target.name, p.target.value); }} />
          </div>
          <button className="create" onClick={() => { registerPokemonHandler(); }}>Crear Pokemon</button>
        </div>
      )
    }
  </div>
);
};

export default CreateComponent;
