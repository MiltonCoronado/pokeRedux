import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StartButton } from './StartButton.jsx';

const PokemonCard = ({ name, image, types }) => {
  const typesStrings = types.map(item => item.type.name).join(', ');
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite onClick={() => alert('clickeado!')}/>}
    >
      <Meta description={typesStrings} />
    </Card>
  )
};

export { PokemonCard };