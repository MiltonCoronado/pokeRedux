import { SET_LOADING } from '../actions/types';

const initialState = {//Este es el STATE. del programa.
  loading: false,
};

const reducerUI = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,//ya es inmutable con el spread operator...
        loading: action.payload,
      };
    default:
      return state;
  }
};

export { reducerUI };
