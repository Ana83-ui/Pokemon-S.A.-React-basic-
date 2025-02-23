import React, { useEffect, useState } from "react";
import { getPokemon } from "../src/services/servicesBack";
import CreateComponent from "./components/CreateComponent";
import ContactComponent from "./components/ContactComponent";
import DetailsComponent from "./components/DetailsComponent";
import ListComponent from "./components/ListComponent";


const HomePage = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [menuOptions, setMenuOptions] = useState(''); //REGISTRO CONTACTO DETALLES LISTA FAVORITO
  const [pokemonDetail, setPokemonDetail] = useState(undefined)
  const [isFavorite, setIsFavorite] = useState({});

  const loadPokemon = () => {
    const auxList = getPokemon();
    setListPokemon(auxList);
  };

 useEffect(() => {
    loadPokemon();
  }, []);

  const menuOptionHandler = (option) => {
    setMenuOptions(option)   
    if (option === "REGISTRO") {
      setPokemonDetail(undefined);
    }
}

const toggleFav = (pokemonId) => {
  const updatedFavorites = { ...isFavorite };
  updatedFavorites[pokemonId] = !updatedFavorites[pokemonId];
  setIsFavorite(updatedFavorites);
};

const favoritePokemon = listPokemon.filter(pokemon => isFavorite[pokemon.id]);


return (
    <div>

      <h1>Bienvenidos a la Pokémania</h1>
  
      <div>
        <div className="btn">
          <div>
            <button className="create" onClick={() => { menuOptionHandler('REGISTRO'); }}>Crear Pokemon</button>
          </div>
          <div>
            <button className="create" onClick={() => { menuOptionHandler('CONTACTO'); }}>Contacto</button>
          </div>
          <div>
            <button className="create" onClick={() => { menuOptionHandler('LISTA'); }}> Lista de Pokemon</button>
          </div>
          <div>
            <button className="create" onClick={() => { menuOptionHandler('FAVORITO'); }}> Mis favoritos</button>
          </div>
        </div>
  
        <div>
          {menuOptions === "REGISTRO" ? (
            <CreateComponent setListPokemon={setListPokemon} loadPokemon={loadPokemon} setMenuOptions={setMenuOptions}  pokemonDetail={pokemonDetail} setPokemonDetail={setListPokemon}/>
          ) : menuOptions === 'CONTACTO' ? (
            <ContactComponent />
          ) : menuOptions === 'DETALLES' ? (
                <DetailsComponent        
                  pokemonDetail={pokemonDetail} 
                  setMenuOptions={setMenuOptions}
                  setListPokemon={setListPokemon}
                  listPokemon={listPokemon}
                />
              ) : menuOptions === 'LISTA' ? (
                <ListComponent 
                  listPokemon={listPokemon} 
                  setPokemonDetail={setPokemonDetail} 
                  setMenuOptions={setMenuOptions}
                  toggleFav={toggleFav}
                  isFavorite={isFavorite}
                />
              ) 
              : menuOptions === 'FAVORITO' ? (
                <ListComponent 
                favoritePokemon={favoritePokemon} 
                setPokemonDetail={setPokemonDetail} 
                setMenuOptions={setMenuOptions}
                isFavorite={isFavorite}
                toggleFav={toggleFav}
                />) 
                :(null)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
