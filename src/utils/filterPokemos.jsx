const filterPokemons = (pokemons, searchValue) => {
    if (!searchValue) return pokemons;
  
    return pokemons.filter((pokemon) =>
      pokemon.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

export { filterPokemons };