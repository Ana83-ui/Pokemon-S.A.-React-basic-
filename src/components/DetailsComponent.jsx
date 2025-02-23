import React, { useEffect, useState } from "react";



const DetailsComponent = (props) => {

    const {pokemonDetail, setMenuOptions, setListPokemon, listPokemon} = props

    const deletePokemon = (id) => {
      const updatedList = listPokemon.filter(pokemon => pokemon.id !== id)
      setListPokemon(updatedList)
        setMenuOptions('LISTA')
        alert("¡Pokemon eliminado!")
  }
  
  return (
    <div>

    <div className="detailsContainer"> 
      <div className="title1">
        <span className="title">Id: </span>
        <span>{pokemonDetail.id}</span>
      </div>
      <div>
        <span className="title">Nombre: </span>
        <span>{pokemonDetail.nombre}</span>
      </div>
      <div>
        <span className="title">URL: </span>
        <span>{pokemonDetail.url}</span>
      </div>
      <div>
        <span className="title">Weight: </span>
        <span>{pokemonDetail.weight}</span>
      </div>
      <div>
        <span className="title">Height: </span>
        <span>{pokemonDetail.height}</span>
      </div>
      <div>
        <span className="title">Type: </span>
        <span>{pokemonDetail.type}</span>
      </div>
      <div className='buttons'>
        <div>
            <button className="create" onClick={()=>{deletePokemon(pokemonDetail.id)}}>Eliminar</button>
        </div>
    <div>
      <button className="create" onClick={()=>{setMenuOptions('REGISTRO')}}>Editar</button>
    </div>

      </div>

    </div>

    </div>
  )
}

export default DetailsComponent
