import { SET_LOADING, SET_POKEMONS } from '../actions/types';

const initialState = {//Este es el STATE. del programa.
  pokemons: [],
  loading: false,
};

const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state;
  }
};

export { reducerSwitch };