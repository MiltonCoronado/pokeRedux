const logger = (store) => (next) => (action) => {//Un middleware es una pieza de codigo que se ejecuta entre que se dispara una accion y esa acccion llega al reducer.
  console.log(action)
  next(action);
};

export { logger };


const featuring = (store) => (next) => (actionInfo) => {
  const featured = [ ...actionInfo.action.payload, { name: 'Daniel' }]
  const updateActionInfo = { 
    ...actionInfo, 
    action: { ...actionInfo.action, payload: featured }
  } 
  next(updateActionInfo);
};

export  { featuring }; 