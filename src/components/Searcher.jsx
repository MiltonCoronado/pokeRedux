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
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'blue'}}>
      <h1>Buscar</h1>
      <Input
        placeholder="Buscar pokemon..."
        style={{ marginBottom: 20 }}
        value={search}
        onChange={handleChange}
      />
    </section> 
  );
};

export { Searcher };