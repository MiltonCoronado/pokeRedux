import { Col } from 'antd';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import logo from './statics/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='pokeredux' />
      </Col>
      <Col span={8} offset={8}>{/* "ANTDESIGN" => "COL" => tiene 2 props que ayudan con el grid de la columna => "SPAN" = espandir max 16... "OFFSET" = centrar de acuerdo al espaciado del span... */}
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  )
};

export { App };

