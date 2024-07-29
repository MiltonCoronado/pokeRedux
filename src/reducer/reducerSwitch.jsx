import { SET_FAVORITE, SET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],
};

const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,//ya es inmutable con el spread operator...
        pokemons: action.payload,
      };
    case SET_FAVORITE:
      const currentPokemonIndex = state.pokemons.findIndex(
        (item) => item.id === action.payload.id//"item.id" itera sobre todos los Ids de los pokemons, en el "action.payload.id" recibimos un valor de un objeto que es dinamico y este es un Id. el cual es enviado al momento de dar click in the start of favorites.
      );

      if (currentPokemonIndex < 0) {
        return state;
      }

      const newPokemonList = state.pokemons.map((item, index) =>
        index === currentPokemonIndex
          ? { ...item, favorite: !item.favorite }//Esta Fn es inmutable con el spread operator... que crea una nueva lista de pokemons con el pokemon actualizado
          : item);

      return {
        ...state,//ya es inmutable con el spread operator...
        pokemons: newPokemonList,
      };
    default:
      return state;
  }
};

export { reducerSwitch };
