import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemonsArray = Array(12).fill('') }) => {//Estos son "parámetros predeterminados de JavaScript" o "parametros con valores por defecto"(aplican ambas en javascript).
  return (
    <div className='PokemonList'>
      {pokemonsArray.map((item) => {
        return <PokemonCard name={item.name} key={item.name} />;
      })}
    </div>
  );
};

// PokemonList.defaultProps = { //React ya va ha dejar de dar soporte a esto.
//   pokemonsArray: Array(12).fill(''),
// };

export { PokemonList };