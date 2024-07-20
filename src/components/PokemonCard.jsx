import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StartButton } from './StartButton.jsx';
import { setFavorite } from '../actions/creators.jsx';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesStrings = types.map(item => item.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ id }))
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton 
              isFavorite={favorite}//Cuando pasamos "favorite" como valor a "isFavorite" sigue siendo undefined...
              onClick={handleOnFavorite}     
            />}
    >
      <Meta description={typesStrings} />
    </Card>
  )
};

export { PokemonCard };