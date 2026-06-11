import { SET_FAVORITE, SET_POKEMONS, SET_SEARCH } from '../actions/types';
import { filterPokemons } from '../utils/filterPokemos';

const initialState = {//Este es el STATE. del programa.
  pokemons: [],
  search: '',
  filteredPokemons: [],
};

const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,//ya es inmutable con el spread operator...
        pokemons: action.payload,
        filteredPokemons: filterPokemons(action.payload, state.search),
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        filteredPokemons: filterPokemons(state.pokemons, action.payload),
      };
    case SET_FAVORITE: {
      const currentPokemonIndex = state.pokemons.findIndex(
        (item) => item.id === action.payload.id//"item.id" itera sobre todos los Ids de los pokemons, en el "action.payload.id" recibimos un valor de un objeto que es dinamico y este es un Id. el cual es enviado al momento de dar click in the start of favorites.
      );

      if (currentPokemonIndex < 0) {
        return state;
      }

      const newPokemonList = state.pokemons.map((pokemon, index) =>
        index === currentPokemonIndex
          ? { ...pokemon, favorite: !pokemon.favorite }//Esta Fn es inmutable con el spread operator... que crea una nueva lista de pokemons con el pokemon actualizado
          : pokemon);

      return {
        ...state,//ya es inmutable con el spread operator...
        pokemons: newPokemonList,
        filteredPokemons: filterPokemons(newPokemonList, state.search),
      };
    }
    default:
      return state;
  }
};

export { reducerSwitch };
