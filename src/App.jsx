import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import { getPokemon } from './api/api.jsx';
import { getPokemonsWithDetails, setLoading } from './actions/creators.jsx';
import logo from './statics/logo.svg';
import './App.css';

const App = () => {//({ pokemons, setPokemons }) con connect se usa props.
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);//useSelector accede al estado y retorna la propiedad del estado a la que queremos acceder.
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      
      const pokemonsResponse = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsResponse));
      
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
      {loading ? (
      <Col offset={12}>
        <Spin spinning size='large' />
      </Col> 
      ) : (
      <PokemonList pokemons={pokemons}/>
      )}
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

