import { SET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],//Este es el STATE. del programa.
};

const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      }
    default:
      return state;
  }
};

export { reducerSwitch };