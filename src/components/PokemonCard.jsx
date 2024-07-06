import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = () => {
  return (
  <Card// CARD ANTDESIGN COMPONENT (card).
    title='Ditto'
    cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}
    extra={<StarOutlined />}//EXTRA prop especial de card en ANTDESIGN. agrega algo a la esquina superior derecha del container... STAROUTLINED "ant-design/icons COMPONENT" (card). coloca una estrella en la esquina superior derecha del container.
  >
    <Meta description='fire, magic' />
  </Card>

  )
};

export { PokemonCard };