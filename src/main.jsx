import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { reducerSwitch } from './reducer/reducerSwitch.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger, featuring } from './middlewares/middlewares.jsx';
import './index.css'

const composedEnhancer = compose( 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(logger, featuring),
);

const storeReducerSwitch = createStore(reducerSwitch, composedEnhancer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={storeReducerSwitch}>{/* El Provider con la prop store proviene de la biblioteca react-redux. Provider es un componente de alto nivel que envuelve tu aplicación para que cualquier componente pueda acceder al store de Redux(que contiene al reducer en si). a través del contexto de React. */}
      <App />
    </Provider>,
)



