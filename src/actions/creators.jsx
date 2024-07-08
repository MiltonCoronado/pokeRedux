import { SET_POKEMONS } from './types';

const setPokemonsActions = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export { setPokemonsActions };