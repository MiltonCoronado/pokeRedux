import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../actions/creators';

const Searcher = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.data.search);

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <Input.Search
      placeholder="Buscar"
      style={{ marginBottom: 20 }}
      value={search}
      onChange={handleChange}
    />
  );
};

export { Searcher };