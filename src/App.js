/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DevTools from 'mobx-react-devtools';

import store from './store/Store';
import Counter from './pages/Counter';
import Async from './pages/Async';

function App() {
  return (
    <div className='App'>
      <DevTools />
      <Counter store={store} />
      <hr />
      <Async />
    </div>
  );
}

export default App;
