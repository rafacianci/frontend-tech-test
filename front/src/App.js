import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';

import reducers from './reducers';
import { setDefaults } from './utils/http';

import AppScene from './scenes/App';

import './App.css';

try {
  if (typeof document !== 'undefined' || document !== null) {
    insertCss(css, { prepend: true });
  }
} catch (e) {
  console.log(e)
}

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

setDefaults();

const App = () => (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={AppScene} />
    </Provider>
  </Router>
);

export default App;
