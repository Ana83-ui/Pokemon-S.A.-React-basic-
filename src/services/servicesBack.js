let listPokemon = [
  {
    "id": 1,
    "nombre": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon/ditto",
    "weight": "40", 
    "height": "3", 
    "type": "normal"
  },
  {
    "id": 2,
    "nombre": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/ivysaur",
    "weight": "130", 
    "height": "10", 
    "type": "grass/poison"
  },
  {
    "id": 3,
    "nombre": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "weight": "69", 
    "height": "7", 
    "type": "grass/poison"
  },
  {
    "id": 4,
    "nombre": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/charmander",
    "weight": "85", 
    "height": "6", 
    "type": "fire"
  },
  {
    "id": 5,
    "nombre": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/squirtle",
    "weight": "90", 
    "height": "5", 
    "type": "water"
  },
  {
    "id": 6,
    "nombre": "pikachu",
    "url": "https://pokeapi.co/api/v2/pokemon/pikachu",
    "weight": "60", 
    "height": "4", 
    "type": "electric"
  },
  {
    "id": 7,
    "nombre": "jigglypuff",
    "url": "https://pokeapi.co/api/v2/pokemon/jigglypuff",
    "weight": "55", 
    "height": "5", 
    "type": "fairy"
  },
  {
    "id": 8,
    "nombre": "meowth",
    "url": "https://pokeapi.co/api/v2/pokemon/meowth",
    "weight": "42", 
    "height": "4", 
    "type": "normal"
  },
  {
    "id": 9,
    "nombre": "psyduck",
    "url": "https://pokeapi.co/api/v2/pokemon/psyduck",
    "weight": "196", 
    "height": "8", 
    "type": "water"
  },
  {
    "id": 10,
    "nombre": "machop",
    "url": "https://pokeapi.co/api/v2/pokemon/machop",
    "weight": "195", 
    "height": "8", 
    "type": "fighting"
  }
];


export const getPokemon = () => {
    return listPokemon
}

export const registerPokemon = (pokemon) => {
    const auxList = [...listPokemon]
    auxList.push(pokemon)
    listPokemon = auxList
}

export const editPokemon = (pokemon, modifyPokemon) => {
  const bdAux = listPokemon.filter(p => p.id != pokemon.id)
  bdAux.push(modifyPokemon)
  listPokemon = bdAux
}
