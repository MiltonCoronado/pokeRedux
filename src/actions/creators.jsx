import { SET_POKEMONS } from './types';

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export { setPokemons };