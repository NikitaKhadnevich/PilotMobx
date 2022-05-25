/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import DevTools from 'mobx-react-devtools';

import store from './store/Store';
import Counter from './pages/Counter';

function App() {
  return (
    <div className='App'>
      <DevTools />
      <Counter store={store} />
    </div>
  );
}

export default App;
