import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StartButton = ({ isFavorite, onClick }) => {//Aca recibe "isFavorite" que sigue siendo undefined y hace una validación con esta propiedad, al ser su valor undefined renderizara el componente StarOutLined.
  const icon = isFavorite ? <StarFilled /> :  <StarOutlined />
  return <Button icon={icon} onClick={onClick} />
};

export { StartButton };