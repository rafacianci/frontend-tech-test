import React from 'react';
import { Content } from 're-bulma';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';

try {
  if (typeof document !== 'undefined' || document !== null) {
    insertCss(css, { prepend: true });
  }
} catch (e) {
  console.log(e)
}

const App = () => (
  <Content>
    <h1>Test</h1>
  </Content>
);

export default App;
