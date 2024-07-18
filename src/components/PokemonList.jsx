import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons = Array(12).fill('') }) => {//Estos son "parámetros predeterminados de JavaScript" o "parametros con valores por defecto"(aplican ambas en javascript). por si la variable "pokemonsArray" no llegase a traer ninguna Data.
  {console.log({pokemons})}
  return (
    <div className='PokemonList'>
      {pokemons.map((item) => {
        return <PokemonCard 
          key={item.name}
          name={item.name}  
          image={item.sprites?.other["official-artwork"].front_default}
          types={item.types}
        />
      })}
    </div>
  );
};

// PokemonList.defaultProps = { //React ya va ha dejar de dar soporte a esto.
//   pokemonsArray: Array(12).fill(''),
// };

export { PokemonList };