import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import { getPokemon, getPokemonDetails } from './api/api.jsx';
import { setPokemons } from './actions/creators.jsx';
import logo from './statics/logo.svg';
import './App.css';

const App = () => {//({ pokemons, setPokemons }) con connect se usa props.
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(// La Fn "Promise.all()" se usa para esperar que varias promesas se resuelvan. En el caso en la Fn "getPokemonDetails(item)". devuelve varios items de un objeto(varias promesas) pasandole un iterador como argumento y esto gracias a que la Fn. esta dentro de un .map() - Este seria un caso comun para usar "await promise.all()"
        pokemonsRes.map((item) => getPokemonDetails(item))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='pokeredux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
};

// const mapStateToProps = (state) => ({//Esta función mapea el estado de Redux a las props del componente. Es útil cuando necesitas acceder a partes del estado de Redux dentro de tu componente.
//   pokemons: state.pokemons,
// });

// const mapDispachToProps = (dispatch) => ({//Esta función mapea las acciones de Redux a las props del componente. Es útil cuando necesitas despachar acciones desde tu componente.
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// });


// const connectedApp = connect(mapStateToProps, mapDispachToProps)(App);
// export { connectedApp as App };

export { App };

