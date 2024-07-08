import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemonsArray }) => {
  return (
    <div className='PokemonList'>
      {pokemonsArray.map((item) => {
        return <PokemonCard name={item.name} key={item.name} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemonsArray: Array(12).fill(''),
};

export { PokemonList };