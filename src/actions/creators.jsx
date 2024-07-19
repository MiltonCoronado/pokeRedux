import { getPokemonDetails } from '../api/api';
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from './types';

const setPokemons = (payload) => ({//Los action creators son sincronos siempre...
  type: SET_POKEMONS,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export { setPokemons, setLoading, setFavorite };


//Redux-Thunk: antes que nada Thunk es un concepto de programacion! ya despues es un midleware que es un enhancer que extiende las capacidades del store y nos permite escribir funciones asincronas. Thunk nos permite escribir action creators que son los que van a retornar esas funciones asincronas(por eso el dispatch como parametro en la Fn asincrona). por esto Redux-Thunk se escribe en este file.
const getPokemonsWithDetails = 
(pokemons = []) => 
  async (dispatch) =>{
    dispatch(setLoading(true));
    const pokemonsDetailed = await Promise.all(// La Fn "Promise.all()" se usa para esperar que varias promesas se resuelvan. En el caso en la Fn "getPokemonDetails(item)". devuelve varios items de un objeto(varias promesas) pasandole un iterador como argumento y esto gracias a que la Fn. esta dentro de un .map() - Este seria un caso comun para usar "await promise.all()"
      pokemons.map((item) => getPokemonDetails(item))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  };

export { getPokemonsWithDetails };




