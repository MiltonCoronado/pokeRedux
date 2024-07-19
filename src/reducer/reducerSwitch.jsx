import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types';

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
    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons]
      const currentPokemonIndex = newPokemonList.findIndex(
        (item) => {
          return item.id === action.payload.pokemonId//de donde sale pokemonId??????????????????????????????????????????????
        });

      if(currentPokemonIndex < 0){
        return state;
      }
      newPokemonList[currentPokemonIndex].favorite = //este caso del reducer lo que hace es crear la nueva propiedad favorite en el objeto pokemon y darle como valor lo opuesto al valor que tiene, como acabamos de crear la propiedad y no le hemos dado un valor aun, su valor por defecto es undefined y al darle como valor lo opuesto a undefined su valor al final seria true y esto agregaria la propiedad "favorite" al objeto seleccionado.
      !newPokemonList[currentPokemonIndex].favorite;

      return { 
        ...state,
         pokemons: newPokemonList,
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