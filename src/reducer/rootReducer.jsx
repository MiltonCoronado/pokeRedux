import { combineReducers } from 'redux';
import { reducerSwitch } from './reducerSwitch';
import { reducerUI } from './reducerUI';

const rootReducer = combineReducers({
  data: reducerSwitch,
  ui: reducerUI
});

export { rootReducer };