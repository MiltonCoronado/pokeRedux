import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import { getPokemon } from './api/api.jsx';
import { setPokemonsActions } from './actions/creators.jsx';
import logo from './statics/logo.svg';
import './App.css';

const App = ({ pokemons, setPokemons }) => {
  // const [pokemons, setPokemons] = useState([]);

  console.log({ pokemons })

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsResponse = await
       getPokemon();
      setPokemons(pokemonsResponse);
    };

    fetchPokemons(); 
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='pokeredux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemonsArray={pokemons}/>
    </div>
  )
};

const mapStateToProps = (state) => ({//Esta función mapea el estado de Redux a las props del componente. Es útil cuando necesitas acceder a partes del estado de Redux dentro de tu componente.
  pokemons: state.pokemons,
});

const mapDispachToProps = (dispatch) => ({//Esta función mapea las acciones de Redux a las props del componente. Es útil cuando necesitas despachar acciones desde tu componente.
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});


const connectedApp = connect(mapStateToProps, mapDispachToProps)(App);
export { connectedApp as App };



