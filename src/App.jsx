import { useEffect } from 'react';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import { getPokemon } from './api/api.jsx';
import { getPokemonsWithDetails } from './actions/creators.jsx';
import logo from './statics/logo.svg';
import './App.css';

const App = () => {//({ pokemons, setPokemons }) con connect se usa props.
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);//"shallowEqual" compara dos objetos para determinar si son iguales a nivel superficial, es decir, si tienen las mismas referencias a los objetos y las mismas propiedades de primer nivel con los mismos valores. Esto es importante ya que es la manera en que React evalúa si un componente debe actualizarse en base a cambios en el estado global. useSelector y shallowEqual se utilizan para optimizar el rendimiento evitando renders innecesarios si las referencias de los objetos seleccionados y las propiedades de primer nivel no han cambiado. Por lo tanto, shallowEqual ayuda a prevenir renders innecesarios al asegurar que los componentes solo se actualicen cuando detectan cambios significativos en las referencias de los objetos copiados.
  const loading = useSelector(state => state.ui.loading);//useSelector accede al estado y retorna la propiedad del estado a la que queremos acceder.
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

