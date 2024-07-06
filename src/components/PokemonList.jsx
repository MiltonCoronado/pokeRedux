import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemonsArray }) => {
  return (
    <div className='PokemonList'>
      {pokemonsArray.map((item) => {
        return <PokemonCard />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemonsArray: Array(12).fill(''),
};

export { PokemonList };