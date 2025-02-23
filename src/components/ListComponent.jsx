import React, { useEffect, useState } from "react";

const ListComponent = (props) => {
  const { listPokemon, setMenuOptions, setPokemonDetail, favoritePokemon, isFavorite, toggleFav } = props;


  const pokemonDetailHandler = (pokemon) => {
    setPokemonDetail(pokemon);
    setMenuOptions("DETALLES");
  };

  const pokemonList = favoritePokemon || listPokemon;
  const title = favoritePokemon ? "Mis favoritos" : "Lista de Pokemon";

  return (
    <div>
      <h2>{title}</h2>
      <div className="componentList">
        {pokemonList && pokemonList.length > 0 ? (
          pokemonList.map((el, idx) => {
            return (
              <div key={idx} className="details">
                <div className="id">
                  <span className="title">Id: </span>
                  <span>{el.id}</span>
                </div>
                <div>
                  <span className="title">Nombre: </span>
                  <span>{el.nombre}</span>
                </div>
                <div>
                  <span className="title">URL: </span>
                  <span>{el.url}</span>
                </div>
                <div>
                  <button className="create" onClick={() => pokemonDetailHandler(el)}>Detalles</button>
                </div>
                <div>
                  <div>
                    <button className="btn-cuore" onClick={() => toggleFav(el.id)}>
                      {isFavorite[el.id] ? (
                        <img className="cuore" src="/src/assets/corazon2.png" alt="Corazon lleno"/>
                      ) : (
                        <img className="cuore" src="/src/assets/corazon1.png" alt="Corazon vacio"/>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="fav">No hay resultados</div>
        )}
      </div>
    </div>
  );
};

export default ListComponent;
