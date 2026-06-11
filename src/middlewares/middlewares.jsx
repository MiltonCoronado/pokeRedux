//Un middleware es una pieza de codigo que se ejecuta entre que se dispara una accion y esa acccion llega al reducer.
const logger = () => (next) => (action) => {
  console.log(action);
  next(action);
};

export { logger };
