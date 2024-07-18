const getPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=74')
  .then(response => response.json())
  .then(data => data.results)//Esto es lo que al final esta retornando mi feching de datos...
  .catch(error => console.error(error));
};

export { getPokemon };

const getPokemonDetails = (item) => {
  return fetch(item.url)//Hace un map e itera solo las url de cada objeto, ya luego resuelve todas las promesas.(para ello promise.all())
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error(error));
};

export { getPokemonDetails };


// export const getPokemons = async () => { 
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
//   const data = await response.text(); 
//   const result = JSON.parse(data); 
//   return result; }
  
