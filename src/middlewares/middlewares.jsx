//Un middleware es una pieza de codigo que se ejecuta entre que se dispara una accion y esa acccion llega al reducer.
const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export { logger };