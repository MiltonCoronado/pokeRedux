const getPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => data.results)//Esto es lo que al final esta retornando mi feching de datos...
  .catch(error => console.error(error))
};

export { getPokemon };



// export const getPokemons = async () => { 
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
//   const data = await response.text(); 
//   const result = JSON.parse(data); 
//   return result; }
  
