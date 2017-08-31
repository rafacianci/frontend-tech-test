import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';

import reducers from './reducers';
import { setDefaults } from './utils/http';

import Tasks from './scenes/Tasks';
import TaskForm from './scenes/TaskForm';

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
      <div>
        <Route path='/task/:taskId' component={TaskForm} />
        <Route exact path="/tasks" component={Tasks} />
        <Route
          exact
          path="/"
          component={() =>
            <Redirect from="/" to="/tasks" />
          }
        />
      </div>
    </Provider>
  </Router>
);

export default App;
