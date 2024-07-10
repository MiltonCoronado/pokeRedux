import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { reducerSwitch } from './reducer/reducerSwitch.jsx';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import './index.css'

const storeReducerSwitch = createStore(reducerSwitch, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeReducerSwitch}>{/* El Provider con la prop store proviene de la biblioteca react-redux. Provider es un componente de alto nivel que envuelve tu aplicación para que cualquier componente pueda acceder al store de Redux(que contiene al reducer en si). a través del contexto de React. */}
      <App />
    </Provider>
  </React.StrictMode>,
)



