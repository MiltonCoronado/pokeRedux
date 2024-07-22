import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { rootReducer } from './reducer/rootReducer.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from '../src/middlewares/middlewares.jsx';
import { thunk } from 'redux-thunk';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer = composeAlt(applyMiddleware(thunk, logger));

const storeReducerSwitch = createStore(rootReducer, composedEnhancer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={storeReducerSwitch}>{/* El Provider con la prop store proviene de la biblioteca react-redux. Provider es un componente de alto nivel que envuelve tu aplicación para que cualquier componente pueda acceder al store de Redux(que contiene al reducer en si). a través del contexto de React. */}
      <App />
    </Provider>,
)


